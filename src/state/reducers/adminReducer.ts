import { ActionType } from "../action-types";
import { Action } from "../actions/userActions";

type AdminState = Array<{
  username: string;
  password: string;
  userType: string;
}>;

const reducer = (state: AdminState = [], action: Action) => {
  let admins;
  switch (action.type) {
    case ActionType.ADMIN_SIGN_UP:
      return [...state, action.payload];

    case ActionType.ADMIN_EDIT:
      admins = state.map((admin) => {
        if (admin.username === action.payload.username) {
          return { ...admin, password: action.payload.password };
        }
        return { ...admin };
      });
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
