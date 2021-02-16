import _ from "lodash";

import { ActionType } from "../action-types";
import { Action } from "../actions/userActions";

type AdminState = Array<{
  username: string;
  password: string;
  userType: string;
}>;

const reducer = (state: AdminState = [], action: Action) => {
  switch (action.type) {
    case ActionType.ADMIN_SIGN_UP:
      return [...state, action.payload];
    case ActionType.ADMIN_EDIT:
      const admins = [...state];
      const index = _.findIndex(state, { username: action.payload.username });
      admins.splice(index, 1, action.payload);
      return admins;
    case ActionType.ADMIN_DELETE:
      return state.filter(
        (admin) => admin.username !== action.payload.username
      );
    default:
      return state;
  }
};

export default reducer;
