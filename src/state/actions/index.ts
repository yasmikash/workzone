import { StringMappingType } from "typescript";
import { ActionType } from "../action-types";

export interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: {
    signedIn: boolean;
    userType: string;
    username: string;
  };
}
