import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_SIGNUP} from '../actions/session';
import { merge } from 'lodash';

const _nullUser = {
  currentUserId: null
};
//default null for when no currentUser

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUserId: Object.keys(action.payload)[0]};
    case RECEIVE_USER_SIGNUP:
      return {currentUserId: Object.keys(action.user)[0]};
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  };
};

export default sessionReducer;
