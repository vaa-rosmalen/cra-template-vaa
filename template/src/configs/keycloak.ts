declare global {
  interface Window {
    AUTH_URL: any;
  }
}

export const KEYCLOAK = {
  realm: "master",
  url: window.AUTH_URL,
  clientId: "frontend"
};

/**
 * @type {Keycloak.KeycloakInitOptions}
 */
export const KEYCLOAK_INIT = {
  onLoad: "login-required",
  silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
  flow: "implicit",
  checkLoginIframe: false
};
