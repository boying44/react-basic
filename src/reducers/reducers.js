import { combineReducers } from 'redux';

const text = (state = "", action) => {
  switch (action.type) {
    case 'CHANGE':
    case 'ACTIONTYPE2':
      return 'Action Recieved';
    default:
      return state;
  }
};

const reducers = combineReducers({
  text,
});

export default reducers;
