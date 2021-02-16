import _ from "lodash";

import { ActionType } from "../action-types";
import { Action } from "../actions/projectActions";

type ProjectState = Array<{
  name: string;
  description: string;
}>;

const reducer = (state: ProjectState = [], action: Action) => {
  let projects;
  switch (action.type) {
    case ActionType.ADD_PROJECT:
      return [...state, action.payload];
    case ActionType.EDIT_PROJECT:
      projects = [...state];
      let index = _.findIndex(state, { name: action.payload.name });
      projects.splice(index, 1, action.payload);
      return projects;
    case ActionType.DELET_PROJECT:
      return state.filter((project) => project.name !== action.payload.name);
    default:
      return state;
  }
};

export default reducer;
