import * as APIUtil from '../util/users_api_util';
import { login } from "../util/session_api_util";

export const FETCH_USERS = "FETCH_USERS";
export const UPDATE_USER = "UPDATE_USER";

export const fetchUsers = () => {
  return dispatch => {
    return APIUtil.fetchUsers().then(users => {
      return dispatch(fetchAllUsers(users))
    });
  };
};

export const updateUser = (user) => {
  debugger
  return dispatch => {
    return APIUtil.updateUser(user).then(user => {
      return dispatch(updateAUser(user))
    });
  };
};

const fetchAllUsers = (users) => {
  return {
    type: FETCH_USERS,
    users
  };
};

const updateAUser = (user) => {
  return {
    type: UPDATE_USER,
    user: Object.values(user)[0]
  };
};
export const checkLogin = (user) => {
  debugger
  return login(user)
      .then(() => {
        return true;
      })
      .fail(()=>{
        return false;
      })
};