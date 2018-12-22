import { combineReducers } from 'redux';
import { IStoreState } from '../StoreDefinition';
import { IComponentAction } from '../actions/actions';

const text = (state = "", action: IComponentAction) => {
  switch (action.type) {
    case 'CHANGE':
      return 'Change';
    case 'ACTIONTYPE2':
      return 'Action Recieved';
    default:
      return state;
  }
};

const rootReducer = combineReducers<IStoreState>({
  text,
});

export default rootReducer;
