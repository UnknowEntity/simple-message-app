import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { component, path, ...rest } = props;
  fetch(`http://localhost:3000${path}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return (
        <Route {...rest} exact path={path}>
          {component(res)}
        </Route>
      );
    })
    .catch(() => {
      <Redirect to="/" />;
    });
};

export default ProtectedRoute;
