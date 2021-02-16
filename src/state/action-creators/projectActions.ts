import { ActionType } from "../action-types";
import history from "../../history";

export const addProject = (project: { name: string; description: string }) => {
  history.push("/projects");
  return {
    type: ActionType.ADD_PROJECT,
    payload: project,
  };
};

export const editProject = (project: { name: string; description: string }) => {
  history.push("/projects");
  return {
    type: ActionType.EDIT_PROJECT,
    payload: project,
  };
};

export const deleteProject = (project: { name: string }) => {
  return {
    type: ActionType.DELET_PROJECT,
    payload: project,
  };
};
