import { combineReducers } from 'redux';
import sessionReducer from './session';

const RootReducer = combineReducer({
  session: <sessionReducer />
});

export default RootReducer;
