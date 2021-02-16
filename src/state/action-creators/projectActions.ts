import { ActionType } from "../action-types";

export const addProject = (project: { name: string; description: string }) => {
  return {
    type: ActionType.ADD_PROJECT,
    payload: project,
  };
};
