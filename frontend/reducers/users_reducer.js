import { RECEIVE_CURRENT_USER, RECEIVE_USER_SIGNUP} from '../actions/session';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload);
    case RECEIVE_USER_SIGNUP:
      return merge({}, state, action.user);
    default:
      return state;
  }
};

export default usersReducer;
