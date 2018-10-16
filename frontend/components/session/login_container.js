
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session';
import LoginContainer from './login';

const mstp = (state) => {
  return{
    errors: state.errors.session
  };
};

const mdtp = (dispatch) =>{
  return {
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () =>dispatch(clearSessionErrors())
  };
};

export default connect(mstp, mdtp)(LoginContainer);
