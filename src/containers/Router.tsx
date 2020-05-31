import * as React from "react";
import loadable from '@loadable/component'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Login = loadable(() => import(/* webpackChunkName: "login" */'./Login'));

const Router = () => <BrowserRouter>
    <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route exact path="/">
            <Redirect to="/login" />
        </Route>
    </Switch>
</BrowserRouter>

export default Router;
