
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignupContainer from './signup';

const mdtp = (dispatch) =>{
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(null, mdtp)(SignupContainer);
