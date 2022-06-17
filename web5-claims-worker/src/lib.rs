use base58::FromBase58;
use base64::encode;
use did_key::{generate, DIDCore, Ed25519KeyPair, CONFIG_LD_PUBLIC};
use oauth2::{reqwest::async_http_client, TokenResponse};
use serde_json::json;
use std::str::FromStr;
use web5_claims::{github, google, parse_auth_code};
use worker::*;

mod utils;

fn log_request(req: &Request) {
    console_log!(
        "{} - [{}], located at: {:?}, within: {}",
        Date::now().to_string(),
        req.path(),
        req.cf().coordinates().unwrap_or_default(),
        req.cf().region().unwrap_or("unknown region".into())
    );
}

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    log_request(&req);

    // Optionally, get more helpful error messages written to the console in the case of a panic.
    utils::set_panic_hook();

    // Optionally, use the Router to handle matching endpoints, use ":name" placeholders, or "*name"
    // catch-alls to match on specific patterns. Alternatively, use `Router::with_data(D)` to
    // provide arbitrary data that will be accessible in each route via the `ctx.data()` method.
    let router = Router::new();

    // Add as many routes as your Worker needs! Each route will get a `Request` for handling HTTP
    // functionality and a `RouteContext` which you can use to  and get route parameters and
    // Environment bindings like KV Stores, Durable Objects, Secrets, and Variables.
    router
        .get("/", |_, _| Response::ok("Hello from Workers!"))
        .post_async("/form/:field", |mut req, ctx| async move {
            if let Some(name) = ctx.param("field") {
                let form = req.form_data().await?;
                match form.get(name) {
                    Some(FormEntry::Field(value)) => {
                        return Response::from_json(&json!({ name: value }))
                    }
                    Some(FormEntry::File(_)) => {
                        return Response::error("`field` param in form shouldn't be a File", 422);
                    }
                    None => return Response::error("Bad Request", 400),
                }
            }
            Response::error("Bad Request", 400)
        })
        .get("/worker-version", |_, ctx| {
            let version = ctx.var("WORKERS_RS_VERSION")?.to_string();
            Response::ok(version)
        })
        .get("/.well-known/did.json", |_req, ctx| {
            let seed = ctx.secret("DID_KEY_SEED").unwrap().to_string();
            let key = generate::<Ed25519KeyPair>(Some(&seed.from_base58().unwrap()));
            let mut did_doc = key.get_did_document(CONFIG_LD_PUBLIC);
            did_doc.verification_method[0].private_key = None;
            let did_doc = serde_json::to_value(&did_doc).unwrap();
            Response::from_json(&did_doc)
        })
        .get("/github", |_, ctx| {
            let client = github::new_client(
                ctx.secret("GITHUB_CLIENT_ID")?.to_string(),
                ctx.secret("GITHUB_CLIENT_SECRET")?.to_string(),
                ctx.var("GITHUB_REDIRECT_URL")?.to_string(),
            );
            Response::redirect(Url::from_str(&github::get_auth_url(&client))?)
        })
        .get("/google", |_, ctx| {
            let client = google::new_client(
                ctx.secret("GOOGLE_CLIENT_ID")?.to_string(),
                ctx.secret("GOOGLE_CLIENT_SECRET")?.to_string(),
                ctx.var("GOOGLE_REDIRECT_URL")?.to_string(),
            );
            Response::redirect(Url::from_str(&google::get_auth_url(&client))?)
        })
        .get_async("/github/callback", |req, ctx| async move {
            let url = req.url().unwrap();
            let (code, _) = parse_auth_code(url).unwrap();
            let client = github::new_client(
                ctx.secret("GITHUB_CLIENT_ID")?.to_string(),
                ctx.secret("GITHUB_CLIENT_SECRET")?.to_string(),
                ctx.var("GITHUB_REDIRECT_URL")?.to_string(),
            );
            let token_res = client
                .exchange_code(code)
                .request_async(async_http_client)
                .await
                .unwrap();

            let access_token = token_res.access_token().secret();

            match github::get_user(access_token).await {
                Ok(user) => {
                    let issuer = "did:web:web5.claims";
                    let seed = ctx.secret("DID_KEY_SEED").unwrap().to_string();
                    let key = generate::<Ed25519KeyPair>(Some(&seed.from_base58().unwrap()));
                    match github::create_vc(issuer.to_string(), user, Some(key)) {
                        Ok(credential) => Response::redirect(Url::from_str(&format!(
                            "https://web5.claims?vc={}",
                            encode(credential)
                        ))?),
                        Err(err) => Response::error(format!("error {:?}", err), 400),
                    }
                }
                Err(err) => Response::error(
                    format!("Github returned the following error:\n{:?}\n", err),
                    400,
                ),
            }
        })
        .get_async("/google/callback", |req, ctx| async move {
            let url = req.url().unwrap();
            let (code, _) = parse_auth_code(url).unwrap();
            let client = google::new_client(
                ctx.secret("GOOGLE_CLIENT_ID")?.to_string(),
                ctx.secret("GOOGLE_CLIENT_SECRET")?.to_string(),
                ctx.var("GOOGLE_REDIRECT_URL")?.to_string(),
            );
            let token_res = client
                .exchange_code(code)
                .request_async(async_http_client)
                .await
                .unwrap();

            let access_token = token_res.access_token().secret();

            match google::get_user(access_token).await {
                Ok(user) => {
                    let issuer = "did:web:web5.claims";
                    let seed = ctx.secret("DID_KEY_SEED").unwrap().to_string();
                    let key = generate::<Ed25519KeyPair>(Some(&seed.from_base58().unwrap()));
                    match google::create_vc(issuer.to_string(), user, Some(key)) {
                        Ok(credential) => Response::redirect(Url::from_str(&format!(
                            "https://web5.claims?vc={}",
                            encode(credential)
                        ))?),
                        Err(err) => Response::error(format!("error {:?}", err), 400),
                    }
                }
                Err(err) => Response::error(
                    format!("Google returned the following error:\n{:?}\n", err),
                    400,
                ),
            }
        })
        .run(req, env)
        .await
}
