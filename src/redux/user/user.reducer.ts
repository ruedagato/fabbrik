import * as userAction from "./user.action";
import { NewUserModel } from "core/models/newUser.model";
import { ActionModel } from "core/models/action.model";

export function user(state: NewUserModel = null, action: ActionModel) {
  switch (action.type) {
    case userAction.CREATE_USER:
      return { ...action.data };
    default:
      return { ...state };
  }
}




