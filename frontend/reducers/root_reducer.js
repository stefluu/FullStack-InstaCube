import React from 'react';
import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import UiReducer from './ui_reducer';
import errorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  ui: UiReducer,
  errors: errorsReducer
});

export default RootReducer;
