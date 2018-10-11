import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';

const _nullUser = {
  id: null
};
//default null for when no currentUser

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id};
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  };
};

export default sessionReducer;
