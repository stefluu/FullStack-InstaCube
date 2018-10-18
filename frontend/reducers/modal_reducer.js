import React from 'react';
import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session'

const ModalReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.formType
    case CLOSE_MODAL:
      return false
    case LOGOUT_CURRENT_USER:
      return false
    default:
      return state;
  };
};

export default ModalReducer;
