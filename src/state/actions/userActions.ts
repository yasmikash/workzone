import { ActionType } from "../action-types";
import { ProjectDeleteAction } from "./projectActions";

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
    projectName: string | null;
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

interface UserAssignToProjectAction {
  type: ActionType.ASSIGN_TO_PROJECT;
  payload: {
    username: string;
    projectName: string;
  };
}

interface UserUnassignFromProject {
  type: ActionType.UNASSIGN_FROM_PROJECT;
  payload: string;
}

export type Action =
  | AdminSignUpAction
  | UserSignUpAction
  | UserEditAction
  | UserDeleteAction
  | UserAssignToProjectAction
  | UserUnassignFromProject
  | ProjectDeleteAction;
