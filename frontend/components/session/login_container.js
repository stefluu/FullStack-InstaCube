
import { connect } from 'React-redux';
import { login } from '../../actions/session';
import Login from './login';

const mdtp = (dispatch) =>{
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(null, mdtp)(Login);
