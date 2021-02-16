import { ActionType } from "../action-types";
import history from "../../history";

export const signUp = (user: {
  username: string;
  password: string;
  userType: string;
  projectName: string | null;
}) => {
  switch (user.userType) {
    case "user":
      history.push("/user/sign-in");
      return {
        type: ActionType.USER_SIGN_UP,
        payload: user,
      };
    case "admin":
      history.push("/admin/sign-in");
      return {
        type: ActionType.ADMIN_SIGN_UP,
        payload: user,
      };
  }
};

export const edit = (user: {
  username: string;
  password: string;
  userType: string;
}) => {
  switch (user.userType) {
    case "user":
      history.push(`/user/${user.username}`);
      return {
        type: ActionType.USER_EDIT,
        payload: user,
      };
    case "admin":
      history.push(`/admin/${user.username}`);

      return {
        type: ActionType.ADMIN_EDIT,
        payload: user,
      };
  }
};

export const deleteUser = (user: { username: string; userType: string }) => {
  switch (user.userType) {
    case "user":
      return {
        type: ActionType.USER_DELETE,
        payload: user,
      };
    case "admin":
      return {
        type: ActionType.ADMIN_DELETE,
        payload: user,
      };
  }
};

export const assignToProject = (data: {
  username: string;
  projectName: string;
}) => {
  return {
    type: ActionType.ASSIGN_TO_PROJECT,
    payload: data,
  };
};

export const unnasignFromProject = (username: string) => {
  return {
    type: ActionType.UNASSIGN_FROM_PROJECT,
    payload: username,
  };
};
