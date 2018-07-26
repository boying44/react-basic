export interface IComponentAction {
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
