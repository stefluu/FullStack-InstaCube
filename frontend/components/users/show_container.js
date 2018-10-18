
import { connect } from 'react-redux';
import Show from './show';
import { openModal } from '../../actions/modal_actions';
import { fetchImages } from '../../actions/images';
import { fetchUsers } from '../../actions/users';
import { withRouter } from 'react-router-dom';


const mstp = (state, ownProps) => {
  return{
    // users: state.entities.users,
    // currentUserId: state.session.currentUserId,
    // currentUser: (state.entities.users)[state.session.currentUserId],
    images: Object.values(state.entities.images),
    users: state.entities.users,
    userId: ownProps.match.params.userId
    // userId: (parseInt(window.location.hash.slice(window.location.hash.search(/[0-9]/))))
  };
};

const mdtp = (dispatch) => {
  return{
    openModal: (formType) => dispatch(openModal(formType)),
    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};



export default withRouter(connect(mstp, mdtp)(Show))
