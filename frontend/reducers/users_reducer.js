import { RECEIVE_CURRENT_USER, RECEIVE_USER_SIGNUP} from '../actions/session';
import { FETCH_USERS, UPDATE_USER } from '../actions/users';
import { merge } from 'lodash';
import likesReducer from "./likes_reducer";
import { combineReducers } from 'redux';


const usersReducer = (state = {}, action) => {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload);
    case RECEIVE_USER_SIGNUP:
      return merge({}, state, action.user);
    case FETCH_USERS:
      return merge({}, state, action.users);
    case UPDATE_USER:
      return merge({}, state[action.user.id], action.user)
    default:
      return state;
  }
};

export default usersReducer;
