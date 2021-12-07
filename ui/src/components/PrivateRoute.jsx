import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  // const isAuthenticated = useSelector((state) => state);
  const id = localStorage.getItem("isAuthenticated");
  console.log(id);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
}

export default PrivateRoute;
