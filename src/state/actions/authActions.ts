import { ActionType } from "../action-types";

interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: {
    userType: string;
    username: string;
    signedIn: boolean;
  };
}

interface SignOutAction {
  type: ActionType.SIGN_OUT;
}

export type Action = SignInAction | SignOutAction;
