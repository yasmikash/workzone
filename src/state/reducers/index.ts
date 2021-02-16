import { combineReducers } from "redux";

import authReducer from "./authReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  auth: authReducer,
  admins: adminReducer,
  users: userReducer,
});

export default reducers;

export type RootType = ReturnType<typeof reducers>; // named import
// get the return type of reducers and make it as the type of RootType
