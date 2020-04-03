import React, { useContext } from "react";
import { ProtectedRoute } from "./protected-route";
import { KeycloakContext } from "./keycloak";

export const RenderRoutes = ({ routes, prefix = "" }) => {
  const { keycloak } = useContext(KeycloakContext);

  const isAuthenticated = () => keycloak.authenticated;

  return routes.map(routeConfig => {
    const {
      route: { path, ...routeRest }
    } = routeConfig;
    const fullPath = prefix + path;
    return (
      <ProtectedRoute
        key={routeConfig.route.path}
        isAuthorized={routeConfig.authenticated ? isAuthenticated : undefined}
        redirectPath="/"
        {...routeRest}
        path={fullPath}
        routes={routeConfig.routes}
      />
    );
  });
};
