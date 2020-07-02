import { ActionModel } from "core/models/action.model";
import { NewUserModel } from "core/models/newUser.model";

export const CREATE_USER = "create user";

export const createUser = (data: NewUserModel): ActionModel<NewUserModel> => ({
  type: CREATE_USER,
  data,
});
