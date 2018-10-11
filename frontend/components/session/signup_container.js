
import { connect } from 'React-redux';
import { signup } from '../../actions/session';
import Signup from './signup';

const mdtp = (dispatch) =>{
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(null, mdtp)(Signup);
