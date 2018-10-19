
import React from 'react';
import { connect } from 'react-redux';
import { likeImage, unlikeImages, fetchUserLikes } from '../../actions/likes';
import ModalImageWindowContainer from './modal_image_window_container';


const mstp = (state) => {
  return{
    imageId: state.ui.imageId,
    likes: state.entities.likes,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.currentUserId]
  };
};

const mdtp = (dispatch) => {
  return {
    fetchLikes: () => dispatch(fetchUserLikes()),
    likeImage: (like) => dispatch(likeImage(like)),
    unlikeImage: (like) => dispatch(unlikeImage(like))
  };
};

export default connect(mstp, mdtp)(ModalImageWindowContainer);
