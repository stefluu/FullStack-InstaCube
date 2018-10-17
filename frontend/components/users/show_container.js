
import { connect } from 'react-redux';
import Show from './show';
import { openModal } from '../../actions/modal_actions';
import { fetchImages } from '../../actions/images';

const mstp = (state) => {
  return{
    // users: state.entities.users,
    currentUserId: state.session.currentUserId,
    currentUser: (state.entities.users)[state.session.currentUserId],
    images: state.entities.images,
    // users: state.entities.users
  };
};

const mdtp = (dispatch) => {
  return{
    toggleModal: () => dispatch(openModal()),
    fetchImages: () => dispatch(fetchImages())
  };
};



export default connect(mstp, mdtp)(Show)
