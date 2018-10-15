
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginContainer from './login';

const mstp = (state) => {
  debugger
  return{
    errors: state.errors.session
  };
};

const mdtp = (dispatch) =>{
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(mstp, mdtp)(LoginContainer);
