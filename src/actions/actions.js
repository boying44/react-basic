const actionCreators = {
  change: () => ({
    type: 'CHANGE',
  }),
  action2: (input) => ({
    input,
    type: 'ACTIONTYPE2',
  }),
};

export default actionCreators;
