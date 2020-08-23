import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { UserContext } from "containers/UserProfile";
import { FunctionComponent } from "react";

const LoginGuard: FunctionComponent<RouteProps> = ({ component, children, ...rest }) => {
  const user = React.useContext(UserContext);
  return <Route {...rest}>{!!user ? children : <Redirect to="/" />}</Route>;
};

export default LoginGuard;
