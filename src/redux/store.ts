import { createStore } from "redux";
import { combineReducers } from "redux";
import * as userReducer from "./user/user.reducer";

const reducer = combineReducers({
  user: userReducer.user,
});

export const store = createStore(reducer);

