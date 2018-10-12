import React from 'react';
import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_errors';


const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  };
};

export default sessionErrorsReducer;
