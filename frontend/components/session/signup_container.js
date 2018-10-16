
import { connect } from 'react-redux';
import { signup, login, clearSessionErrors } from '../../actions/session';
import SignupContainer from './signup';

const mstp = (state) => {
  return{
    errors: state.errors.session
  };
};

const mdtp = (dispatch) =>{
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mstp, mdtp)(SignupContainer);
