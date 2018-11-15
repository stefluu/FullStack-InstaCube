
import React from 'react';
import { connect } from 'react-redux';
import { likeImage, unlikeImage, fetchAllLikes } from '../../actions/likes';
import modalImageWindowContainer from './modal_image_window_container';


const mstp = (state) => {
  return{
    imageId: state.ui.imageId,
    likes: state.entities.likes,
    users: state.entities.users,
    currentUserId: state.session.currentUserId
  };
};

const mdtp = (dispatch) => {
  return {
    fetchLikes: () => dispatch(fetchAllLikes()),
    likeImage: (like) => dispatch(likeImage(like)),
    unlikeImage: (like) => dispatch(unlikeImage(like))
  };
};

export default connect(mstp, mdtp)(modalImageWindowContainer);
