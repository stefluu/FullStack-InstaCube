
import { connect } from 'react-redux';
import Show from './show';
import { openModal } from '../../actions/modal_actions';
import { fetchImages } from '../../actions/images';
import { fetchUsers } from '../../actions/users';

const mstp = (state) => {
  return{
    // users: state.entities.users,
    // currentUserId: state.session.currentUserId,
    // currentUser: (state.entities.users)[state.session.currentUserId],
    images: state.entities.images,
    users: state.entities.users,
    userId: (parseInt(window.location.hash.slice(window.location.hash.search(/[0-9]/))))
  };
};

const mdtp = (dispatch) => {
  return{
    toggleModal: () => dispatch(openModal()),
    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};



export default connect(mstp, mdtp)(Show)
