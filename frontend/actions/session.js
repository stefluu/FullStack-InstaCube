import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_USER_SIGNUP = "RECEIVE_USER_SIGNUP";


export const signup = (user) => {
  return dispatch => {
    return APIUtil.signup(user).then(user => {
      console.log(user);
      return dispatch(receiveUserSignup(user))
    });
  };
};

export const login = (user) => {
  return dispatch => {
    return APIUtil.login(user).then(payload => {
      return dispatch(receiveCurrentUser(payload))
    });
  };
};
//the payload comes from current_user.json.jbuilder which has all info specified in partial but for currentUser

export const logout = () => {
  return dispatch => {
    return APIUtil.logout().then(user => {
      return dispatch(logoutCurrentUser())
    })
  }
}


const receiveCurrentUser = (payload) => {
  return{
    type: RECEIVE_CURRENT_USER,
    payload,
  };
};

const receiveUserSignup = (user) => {
  return {
    type: RECEIVE_USER_SIGNUP,
    user
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

// const receiveErrors = (errors) => {
//   return{

// }
// }
