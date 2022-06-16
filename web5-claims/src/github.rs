use oauth2::basic::BasicClient;
use oauth2::{AuthUrl, ClientId, ClientSecret, RedirectUrl, TokenUrl};
use serde_json::Value;
use std::error::Error;

pub fn new_client(
    github_client_id: String,
    github_client_secret: String,
    redirect_url: String,
) -> BasicClient {
    let github_client_id = ClientId::new(github_client_id);
    let github_client_secret = ClientSecret::new(github_client_secret);
    let auth_url = AuthUrl::new("https://github.com/login/oauth/authorize".to_string())
        .expect("Invalid authorization endpoint URL");
    let token_url = TokenUrl::new("https://github.com/login/oauth/access_token".to_string())
        .expect("Invalid token endpoint URL");

    // Set up the config for the Github OAuth2 process.
    BasicClient::new(
        github_client_id,
        Some(github_client_secret),
        auth_url,
        Some(token_url),
    )
    // This example will be running its own server at localhost:8080.
    // See below for the server implementation.
    .set_redirect_uri(RedirectUrl::new(redirect_url).expect("Invalid redirect URL"))
}

pub async fn get_user(access_token: &String) -> Result<Value, Box<dyn Error>> {
    let req = reqwest::Client::new()
        .get("https://api.github.com/user")
        .header("User-Agent", "web5.claims")
        .header("Authorization", format!("token {}", access_token))
        .header("Accept", "application/json");
    let res = req.send().await?;
    Ok(res.json::<serde_json::Value>().await?)
}
