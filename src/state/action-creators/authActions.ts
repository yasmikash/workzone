import _ from "lodash";

import { ActionType } from "../action-types";
import history from "../../history";

export const signIn = (user: {
  username: string;
  password: string;
  userType: string;
}) => {
  return (dispatch: any, getState: any) => {
    switch (user.userType) {
      case "user":
        const users = getState().users;
        const foundUser = _.find(users, { username: user.username });
        if (foundUser?.password !== user.password) {
          dispatch({
            type: ActionType.ERROR,
            payload: "Could not get user",
          });
        } else {
          dispatch({
            type: ActionType.SIGN_IN,
            payload: {
              userType: "user",
              username: user.username,
            },
          });
          history.push(`/user/${user.username}`);
        }
        break;
      case "admin":
        const admins = getState().admins;
        const foundAdmin = _.find(admins, { username: user.username });
        if (foundAdmin?.password !== user.password) {
          dispatch({
            type: ActionType.ERROR,
            payload: "Could not get user",
          });
        } else {
          dispatch({
            type: ActionType.SIGN_IN,
            payload: {
              userType: "admin",
              username: user.username,
            },
          });
          history.push(`/admin/${user.username}`);
        }
        break;
    }
  };
};

export const signOut = () => {
  return { type: ActionType.SIGN_OUT };
};
