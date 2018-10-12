
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginContainer from './login';

const mdtp = (dispatch) =>{
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(null, mdtp)(LoginContainer);
