import * as APIUtil from '../util/users_api_util';

export const FETCH_USERS = "FETCH_USERS";
export const UPDATE_USER = "UPDATE_USER";

export const fetchUsers = () => {
  return dispatch => {
    return APIUtil.fetchUsers().then(users => {
      return dispatch(fetchAllUsers(users))
    });
  };
};

export const updateUser = (userId) => {
  return dispatch => {
    return APIUtil.updateUser(userId).then(user => {
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
    user
  };
};