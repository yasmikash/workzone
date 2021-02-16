import { ActionType } from "../action-types";
import { Action } from "../actions/userActions";

type UserState = Array<{
  username: string;
  password: string;
  userType: string;
  projectName?: string | null;
}>;

const reducer = (state: UserState = [], action: Action) => {
  let users;
  switch (action.type) {
    case ActionType.USER_SIGN_UP:
      return [...state, action.payload];

    case ActionType.USER_EDIT:
      users = state.map((user) => {
        if (user.username === action.payload.username) {
          return { ...user, password: action.payload.password };
        }
        return { ...user };
      });
      return users;

    case ActionType.USER_DELETE:
      return state.filter((user) => user.username !== action.payload.username);

    case ActionType.ASSIGN_TO_PROJECT:
      users = state.map((user) => {
        if (user.username === action.payload.username) {
          return { ...user, projectName: action.payload.projectName };
        }
        return { ...user };
      });
      return users;
    case ActionType.UNASSIGN_FROM_PROJECT:
      users = state.map((user) => {
        if (user.username === action.payload) {
          return { ...user, projectName: null };
        }
        return { ...user };
      });
      return users;

    case ActionType.DELET_PROJECT:
      users = state.map((user) => {
        if (user.projectName === action.payload.name) {
          return { ...user, projectName: null };
        }
        return { ...user };
      });
      return users;

    default:
      return state;
  }
};

export default reducer;
