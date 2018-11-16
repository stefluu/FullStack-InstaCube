
import { connect } from 'react-redux';
import Show from './show';
import { openModal } from '../../actions/modal_actions';
import { fetchImages } from '../../actions/images';
import { fetchUsers } from '../../actions/users';
import { withRouter } from 'react-router-dom';
import { fetchAllLikes } from '../../actions/likes';
import { follow, unfollow, fetchFollows } from '../../actions/followings';


const mstp = (state, ownProps) => {
  return{
    // users: state.entities.users,
    // currentUserId: state.session.currentUserId,
    // currentUser: (state.entities.users)[state.session.currentUserId],
    images: Object.values(state.entities.images),
    users: state.entities.users,
    userId: parseInt(ownProps.match.params.userId),
    followings: state.entities.followings
    // userId: (parseInt(window.location.hash.slice(window.location.hash.search(/[0-9]/))))
  };
};

const mdtp = (dispatch) => {
  return{
    fetchLikes: () => dispatch(fetchAllLikes()),
    openModal: (formType) => dispatch(openModal(formType)),
    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers()),
    follow: (following) => dispatch(follow(following)),
    unfollow: (followingId) => dispatch(unfollow(followingId)),
    fetchFollows: () => dispatch(fetchFollows())
  };
};



export default withRouter(connect(mstp, mdtp)(Show))
