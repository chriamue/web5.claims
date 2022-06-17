use base58::ToBase58;
use did_key::CoreSign;
use did_key::{DIDCore, KeyPair};
use identity_iota::core::json;
use identity_iota::core::FromJson;
use identity_iota::core::Timestamp;
use identity_iota::core::Url;
use identity_iota::credential::Credential;
use identity_iota::credential::CredentialBuilder;
use identity_iota::credential::Subject;
use identity_iota::crypto::{Proof, ProofOptions, ProofPurpose, ProofValue};
use oauth2::basic::BasicClient;
use oauth2::{
    AuthUrl, ClientId, ClientSecret, CsrfToken, RedirectUrl, RevocationUrl, Scope, TokenUrl,
};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::error::Error;

#[derive(Serialize, Deserialize)]
pub struct User {
    sub: String,
    name: String,
    email: String,
}

impl Default for User {
    fn default() -> Self {
        User {
            sub: "1".to_string(),
            name: "default".to_string(),
            email: "example@gmail.com".to_string(),
        }
    }
}

pub fn create_vc(
    issuer: String,
    user: User,
    issuer_key: Option<KeyPair>,
) -> Result<String, Box<dyn Error>> {
    let subject: Subject = Subject::from_json_value(json!({
      "id": format!("mailto://{}", user.email),
      "sub": user.sub,
      "name": user.name,
      "email": user.email
    }))?;

    let mut credential: Credential = CredentialBuilder::default()
        .id(Url::parse("https://example.edu/credentials/3732")?)
        .type_("GoogleAccount")
        .issuer(Url::parse(&issuer)?)
        .subject(subject)
        .build()?;

    if let Some(key) = issuer_key {
        let proof_options = ProofOptions {
            created: Some(Timestamp::now_utc()),
            expires: None,
            challenge: None,
            domain: None,
            purpose: Some(ProofPurpose::AssertionMethod),
        };
        let did = key.get_did_document(Default::default()).id;
        let mut signature: Proof =
            Proof::new_with_options("JcsEd25519Signature2020", &did, proof_options);
        credential.proof = Some(signature.clone());
        // https://identity.foundation/JcsEd25519Signature2020/
        let jcs_credential = serde_jcs::to_vec(&credential).unwrap();
        let mut hasher = Sha256::new();
        hasher.update(jcs_credential);
        let sha_credential = hasher.finalize();
        let signed = key.sign(&sha_credential);
        let b58_hash = signed.to_base58();
        signature.set_value(ProofValue::Proof(b58_hash));
        credential.proof = Some(signature.clone());
    };
    Ok(credential.to_string())
}

pub fn new_client(
    google_client_id: String,
    google_client_secret: String,
    redirect_url: String,
) -> BasicClient {
    let google_client_id = ClientId::new(google_client_id);
    let google_client_secret = ClientSecret::new(google_client_secret);
    let auth_url = AuthUrl::new("https://accounts.google.com/o/oauth2/v2/auth".to_string())
        .expect("Invalid authorization endpoint URL");
    let token_url = TokenUrl::new("https://www.googleapis.com/oauth2/v3/token".to_string())
        .expect("Invalid token endpoint URL");

    // Set up the config for the Github OAuth2 process.
    BasicClient::new(
        google_client_id,
        Some(google_client_secret),
        auth_url,
        Some(token_url),
    )
    // This example will be running its own server at localhost:8080.
    // See below for the server implementation.
    .set_redirect_uri(RedirectUrl::new(redirect_url).expect("Invalid redirect URL"))
    .set_revocation_uri(
        RevocationUrl::new("https://oauth2.googleapis.com/revoke".to_string())
            .expect("Invalid revocation endpoint URL"),
    )
}

pub fn get_auth_url(client: &BasicClient) -> String {
    // Generate the authorization URL to which we'll redirect the user.
    let (authorize_url, _csrf_state) = client
        .authorize_url(CsrfToken::new_random)
        // This example is requesting access to the user's public repos and email.
        .add_scope(Scope::new("email".to_string()))
        .add_scope(Scope::new("profile".to_string()))
        .url();

    authorize_url.to_string()
}

pub async fn get_user(access_token: &String) -> Result<User, Box<dyn Error>> {
    let req = reqwest::Client::new()
        .get(format!(
            "https://www.googleapis.com/oauth2/v3/userinfo?access_token={}",
            access_token
        ))
        .header("User-Agent", "web5.claims");
    let res = req.send().await?;
    Ok(res.json::<User>().await?)
}

#[cfg(test)]
mod tests {
    use super::*;
    use did_key::{generate, Ed25519KeyPair};
    use serde_json::Value;

    #[test]
    fn test_issue_vc() {
        let key = generate::<Ed25519KeyPair>(None);
        let issuer = "https://example.com/issuer".to_string();
        let credential = create_vc(issuer.to_string(), User::default(), Some(key)).unwrap();
        let credential: Value = serde_json::from_str(&credential).unwrap();
        assert_eq!(credential["issuer"].as_str().unwrap(), issuer);
        print!("{}", credential)
    }
}
