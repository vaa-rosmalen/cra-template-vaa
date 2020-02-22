import React, { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import { KEYCLOAK, KEYCLOAK_INIT } from "configs/keycloak";

/**
 * @type {React.Context<{keycloak: Keycloak.KeycloakInstance}>}
 */
const KeycloakContext = React.createContext<any>(undefined);

const keycloakInstance = Keycloak(KEYCLOAK);

/**
 * @param {Keycloak.KeycloakInstance} kcInstance
 * @param {(_token: string) => void} onToken
 */
function initializeKeycloak(
  kcInstance,
  onToken = _token => {},
  onSuccess = _authenticated => {}
) {
  kcInstance.onAuthSuccess = () => {
    console.log("Keycloak onAuthSuccess");
    onToken(kcInstance.token);
  };
  kcInstance.onAuthRefreshSuccess = () => {
    console.log("Keycloak onAuthRefreshSuccess");
    onToken(kcInstance.token);
  };
  kcInstance.onAuthError = error => {
    console.error("Keycloak onAuthError:", error);
  };
  kcInstance.onAuthRefreshError = error => {
    console.error("Keycloak onAuthRefreshError:", error);
  };

  return kcInstance
    .init({
      ...KEYCLOAK_INIT
      // promiseType: "native"
    })
    .success(authenticated => {
      console.log("Keycloak success");
      onSuccess(authenticated);
    })
    .error((...args) => {
      console.error("Keycloak initialization error:", ...args);
    });
}

/**
 * @param {{onToken: (_token: string) => void}} params
 */
export const KeycloakProvider = ({ children, onToken, LoadingComponent }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeKeycloak(keycloakInstance, onToken, () => {
      setLoading(false);
    });
  }, []);

  if (LoadingComponent && loading) {
    return LoadingComponent;
  }

  return (
    <KeycloakContext.Provider value={{ keycloak: keycloakInstance }}>
      {children}
    </KeycloakContext.Provider>
  );
};

export { KeycloakContext };
