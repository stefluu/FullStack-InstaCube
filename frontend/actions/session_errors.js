
export const RECEIVE_SESSION_ERRORS = "SET_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveSessionErrors = (errors) =>{
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearSessionErrors = (currentUser) => {
  type: CLEAR_SESSION_ERRORS
}
