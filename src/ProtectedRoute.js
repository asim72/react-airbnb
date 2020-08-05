import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "./services/AuthService";

export const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthService.isAuthenticated() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
