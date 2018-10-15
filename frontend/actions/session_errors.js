
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// export const recieveErrors = () => {
//   return dispatch => {
//     return dispatch(receiveSessionErrors(errors))
//   }
// }
//



const receiveSessionErrors = (errors) =>{
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

const clearSessionErrors = (currentUser) => {
  type: CLEAR_SESSION_ERRORS
}
