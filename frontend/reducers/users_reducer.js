import { RECEIVE_CURRENT_USER} from '../actions/session';

const usersReducer = (state = {}, action) => {
  if (action.type === RECEIVE_CURRENT_USER) {
    return merge({}, state, { [action.user.id]: action.user})
  } else {
    return state;
  };
};

export default usersReducer;
