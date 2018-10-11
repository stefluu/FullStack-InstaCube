
import { connect } from 'React-redux';
import { signup } from '../../actions/session';
import GenericForm from './form';
import { signup } from '../../actions/session'

const mstp = (state) => {
  return {
    buttonText: "Sign Up"
  }
}

const mdtp = (dispatch) =>{
  return {
    action: (user) => dispatch(signup(user))
  };
};

export default connect(null, mdtp)(Signup);
