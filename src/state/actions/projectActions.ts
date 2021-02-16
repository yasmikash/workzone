import { ActionType } from "../action-types";

interface ProjectAddEditAction {
  type: ActionType.ADD_PROJECT | ActionType.EDIT_PROJECT;
  payload: {
    name: string;
    description: string;
  };
}

export interface ProjectDeleteAction {
  type: ActionType.DELET_PROJECT;
  payload: {
    name: string;
  };
}

export type Action = ProjectAddEditAction | ProjectDeleteAction;
