import { Action } from "redux";

export interface IComponentAction extends Action {
  type: string;
  input?: string;
}

const actionCreators = {
  change: () => ({
    type: 'CHANGE',
  }),
  action2: (input: string) => ({
    input,
    type: 'ACTIONTYPE2',
  }),
};

export default actionCreators;
