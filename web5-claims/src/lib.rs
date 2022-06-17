use oauth2::{AuthorizationCode, CsrfToken};
use simple_error::SimpleError;
use std::error::Error;
use url::Url;

pub mod github;
pub mod google;

pub fn parse_auth_code(url: Url) -> Result<(AuthorizationCode, CsrfToken), Box<dyn Error>> {
    let code_pair = url
        .query_pairs()
        .find(|pair| {
            let &(ref key, _) = pair;
            key == "code"
        })
        .ok_or_else(|| SimpleError::new("no code in params"))?;

    let (_, value) = code_pair;
    let code = AuthorizationCode::new(value.into_owned());

    let state_pair = url
        .query_pairs()
        .find(|pair| {
            let &(ref key, _) = pair;
            key == "state"
        })
        .ok_or_else(|| SimpleError::new("no state in params"))?;

    let (_, value) = state_pair;
    let state = CsrfToken::new(value.into_owned());

    Ok((code, state))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_auth_url() {
        let client = github::new_client(
            "github_client_id".to_string(),
            "github_client_secret".to_string(),
            "http://localhost:8080".to_string(),
        );
        let url = github::get_auth_url(&client);
        assert!(url.starts_with("https://"));
    }

    #[test]
    fn test_parse() {
        let url = Url::parse("https://example.com/?param=wrong").unwrap();
        let parsed = parse_auth_code(url);
        assert!(parsed.is_err());

        let url = Url::parse("https://example.com/?code=some_code&state=some_state").unwrap();
        let parsed = parse_auth_code(url);
        assert!(parsed.is_ok());
    }
}
