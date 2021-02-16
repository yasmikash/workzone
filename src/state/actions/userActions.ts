import { ActionType } from "../action-types";

interface AdminSignUpAction {
  type: ActionType.ADMIN_SIGN_UP;
  payload: {
    username: string;
    password: string;
    userType: "admin";
  };
}

interface UserSignUpAction {
  type: ActionType.USER_SIGN_UP;
  payload: {
    username: string;
    password: string;
    userType: "user";
  };
}

interface UserEditAction {
  type: ActionType.USER_EDIT | ActionType.ADMIN_EDIT;
  payload: {
    username: string;
    password: string;
    userType: string;
  };
}

interface UserDeleteAction {
  type: ActionType.USER_DELETE | ActionType.ADMIN_DELETE;
  payload: {
    username: string;
    userType: string;
  };
}

export type Action =
  | AdminSignUpAction
  | UserSignUpAction
  | UserEditAction
  | UserDeleteAction;
