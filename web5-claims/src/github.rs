use chrono::{DateTime, Utc};
use identity_iota::core::json;
use identity_iota::core::FromJson;
use identity_iota::core::Url;
use identity_iota::credential::Credential;
use identity_iota::credential::CredentialBuilder;
use identity_iota::credential::Subject;
use oauth2::basic::BasicClient;
use oauth2::{AuthUrl, ClientId, ClientSecret, RedirectUrl, TokenUrl};
use serde::{Deserialize, Serialize};
use std::error::Error;

#[derive(Serialize, Deserialize)]
pub struct User {
    id: u64,
    login: String,
    name: String,
    created_at: DateTime<Utc>,
    url: String,
    html_url: String,
    followers: u64,
    public_repos: u64,
}

impl Default for User {
    fn default() -> Self {
        User {
            id: 1,
            login: "default".to_string(),
            name: "default".to_string(),
            created_at: Utc::now(),
            url: "https://api.github.com".to_string(),
            html_url: "https://github.com".to_string(),
            followers: 1,
            public_repos: 1,
        }
    }
}

pub fn create_vc(issuer: String, user: User) -> Result<String, Box<dyn Error>> {
    let subject: Subject = Subject::from_json_value(json!({
      "id": user.html_url.to_string(),
      "name": user.name,
      "login": user.login,
      "created_at": user.created_at.to_rfc3339(),
      "url": user.url,
      "html_url": user.html_url,
      "followers": user.followers,
      "public_repos": user.public_repos
    }))?;

    let credential: Credential = CredentialBuilder::default()
        .id(Url::parse("https://example.edu/credentials/3732")?)
        .type_("GithubAccount")
        .issuer(Url::parse(&issuer)?)
        .subject(subject)
        .build()?;
    Ok(credential.to_string())
}

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

pub async fn get_user(access_token: &String) -> Result<User, Box<dyn Error>> {
    let req = reqwest::Client::new()
        .get("https://api.github.com/user")
        .header("User-Agent", "web5.claims")
        .header("Authorization", format!("token {}", access_token))
        .header("Accept", "application/json");
    let res = req.send().await?;
    Ok(res.json::<User>().await?)
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::Value;

    #[test]
    fn test_default_user() {
        assert_eq!(User::default().public_repos, 0);
    }

    #[test]
    fn test_issue_vc() {
        let issuer = "https://example.com/issuer".to_string();
        let credential = create_vc(issuer.to_string(), User::default()).unwrap();
        let credential: Value = serde_json::from_str(&credential).unwrap();
        assert_eq!(credential["issuer"].as_str().unwrap(), issuer);
        print!("{}", credential)
    }
}
