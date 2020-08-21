/// <reference path='./index.d.ts'/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as firebase from "firebase/app";
import App from "./containers/App";
import { Provider } from "react-redux";
import { store } from "redux/store";

import "assets/global.scss";

firebase.initializeApp({
  apiKey: "AIzaSyBcVMePlo51ZdZ_A_g1GXYm6F4xnap0uB0",
  authDomain: "fabbrik-5e7c4.firebaseapp.com",
  databaseURL: "https://fabbrik-5e7c4.firebaseio.com",
  projectId: "fabbrik-5e7c4",
  storageBucket: "fabbrik-5e7c4.appspot.com",
  messagingSenderId: "342707528652",
  appId: "1:342707528652:web:dc39992df9caed5ffc7369",
  measurementId: "G-2Q00Y79THE",
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
