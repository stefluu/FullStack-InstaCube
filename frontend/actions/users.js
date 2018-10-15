import * as APIUtil from '../util/users_api_util';

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => {
  return dispatch => {
    return APIUtil.fetchUsers().then(users => {
      return dispatch(fetchAllUsers(users))
    });
  };
};

const fetchAllUsers = (users) => {
  return {
    type: FETCH_USERS,
    users
  };
};
