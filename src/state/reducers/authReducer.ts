import { Action } from "../actions/authActions";

interface AuthState {
  userType: string | null;
  username: string | null;
  signedIn: boolean | null;
}

const INITIAL_STATE: AuthState = {
  userType: null,
  username: null,
  signedIn: null,
};

const reducer = (state: AuthState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        signedIn: true,
        userType: action.payload.userType,
        username: action.payload.username,
      };

    case "SIGN_OUT":
      return { ...state, userType: null, username: null, signedIn: null };
    default:
      return state;
  }
};

export default reducer;
