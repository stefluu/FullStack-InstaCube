
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignupContainer from './signup';

const mstp = (state) => {
  return{
    errors: state.errors.session
  };
};

const mdtp = (dispatch) =>{
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(mstp, mdtp)(SignupContainer);
