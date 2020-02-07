import React from "react";
import { Redirect, Route } from "react-router-dom";

export function ProtectedRoute({
  component: Component,
  path,
  isAuthorized,
  redirectPath,
  routes,
  ...rest
}) {
  return (
    <Route
      path={path}
      status={403}
      {...rest}
      render={props => {
        if (!isAuthorized || isAuthorized()) {
          return <Component subRoutes={routes} {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: redirectPath || "/",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}
