
import { connect } from 'react-redux';
import Show from './show';
import { openModal } from '../../actions/modal_actions'

const mstp = (state) => {
  return{
    // users: state.entities.users,
    userId: state.session.currentUserId,
    currentUser: (state.entities.users)[state.session.currentUserId],
  };
};

const mdtp = (dispatch) => {
  return{
    toggleModal: () => dispatch(openModal())
  };
};



export default connect(mstp, mdtp)(Show)
