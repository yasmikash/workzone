import _ from "lodash";

import { ActionType } from "../action-types";
import { Action } from "../actions/userActions";

type UserState = Array<{
  username: string;
  password: string;
  userType: string;
}>;

const reducer = (state: UserState = [], action: Action) => {
  let users;
  switch (action.type) {
    case ActionType.USER_SIGN_UP:
      return [...state, action.payload];
    case ActionType.USER_EDIT:
      users = [...state];
      let index = _.findIndex(state, { username: action.payload.username });
      users.splice(index, 1, action.payload);
      return users;
    case ActionType.USER_DELETE:
      return state.filter((user) => user.username !== action.payload.username);
    default:
      return state;
  }
};

export default reducer;
