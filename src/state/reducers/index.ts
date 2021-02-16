import { combineReducers } from "redux";

import authReducer from "./authReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import projectReducer from "./projectReducer";

const reducers = combineReducers({
  auth: authReducer,
  admins: adminReducer,
  users: userReducer,
  projects: projectReducer,
});

export default reducers;

export type RootType = ReturnType<typeof reducers>;
// get the return type of reducers and make it as the type of RootType
