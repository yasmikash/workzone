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
      projects = state.map((project) => {
        if (project.name === action.payload.name) {
          return { ...project, ...action.payload };
        }
        return { ...project };
      });
      return projects;

    case ActionType.DELET_PROJECT:
      return state.filter((project) => project.name !== action.payload.name);
    default:
      return state;
  }
};

export default reducer;
