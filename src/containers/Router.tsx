import * as React from "react";
import loadable from '@loadable/component'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {USERS} from "core/constants/path";

const Login = loadable(() => import(/* webpackChunkName: "login" */'./Login'));
const Users = loadable(() => import(/* webpackChunkName: "Users" */'components/Users'))

const Router = () => <BrowserRouter>
    <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path={USERS}>
            <Users />
        </Route>
        <Route exact path="/">
            <Redirect to="/login" />
        </Route>
    </Switch>
</BrowserRouter>

export default Router;
