import { RECEIVE_CURRENT_USER} from '../actions/session';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  if (action.type === RECEIVE_CURRENT_USER) {
    return merge({}, state, { [action.user.id]: action.user})
  } else {
    return state;
  };
};

export default usersReducer;
