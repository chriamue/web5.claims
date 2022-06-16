use oauth2::basic::BasicClient;
use oauth2::{AuthUrl, ClientId, ClientSecret, CsrfToken, RedirectUrl, Scope, TokenUrl};


pub fn get_auth_url(github_client_id: String, github_client_secret: String) -> String {
    let github_client_id = ClientId::new(github_client_id);
    let github_client_secret = ClientSecret::new(github_client_secret);
    let auth_url = AuthUrl::new("https://github.com/login/oauth/authorize".to_string())
        .expect("Invalid authorization endpoint URL");
    let token_url = TokenUrl::new("https://github.com/login/oauth/access_token".to_string())
        .expect("Invalid token endpoint URL");

    // Set up the config for the Github OAuth2 process.
    let client = BasicClient::new(
        github_client_id,
        Some(github_client_secret),
        auth_url,
        Some(token_url),
    )
    // This example will be running its own server at localhost:8080.
    // See below for the server implementation.
    .set_redirect_uri(
        RedirectUrl::new("http://localhost:8080".to_string()).expect("Invalid redirect URL"),
    );

    // Generate the authorization URL to which we'll redirect the user.
    let (authorize_url, _csrf_state) = client
        .authorize_url(CsrfToken::new_random)
        // This example is requesting access to the user's public repos and email.
        .add_scope(Scope::new("public_repo".to_string()))
        .add_scope(Scope::new("user:email".to_string()))
        .url();

    authorize_url.to_string()
}

#[cfg(test)]
mod tests {
    use crate::get_auth_url;

    #[test]
    fn test_get_auth_url() {
        let url = get_auth_url(
            "github_client_id".to_string(),
            "github_client_secret".to_string(),
        );
        assert!(url.starts_with("https://"));
    }
}
