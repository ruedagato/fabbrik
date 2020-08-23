import * as React from "react";
import loadable from "@loadable/component";
import LoginGuard from "./LoginGuard";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { USERS } from "core/constants/path";

const Login = loadable(() => import(/* webpackChunkName: "login" */ "pages/Login"));
const Users = loadable(() => import(/* webpackChunkName: "Users" */ "components/Users"));

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>

      <LoginGuard path={USERS}>
        <Users />
      </LoginGuard>

      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
