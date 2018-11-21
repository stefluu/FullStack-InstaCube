
import React from 'react';
import { connect } from 'react-redux';
import { likeImage, unlikeImage, fetchAllLikes } from '../../actions/likes';
import modalImageWindowContainer from './modal_image_window_container';
import { fetchComments } from '../../actions/comments';
import { fetchUsers } from '../../actions/users';
import { fetchImages } from '../../actions/images';


const mstp = (state) => {
  return{
    imageId: state.ui.imageId,
    likes: state.entities.likes,
    users: state.entities.users,
    currentUserId: state.session.currentUserId,
    comments: state.entities.comments,
    images: state.entities.images
  };
};

const mdtp = (dispatch) => {
  return {
    fetchLikes: () => dispatch(fetchAllLikes()),
    likeImage: (like) => dispatch(likeImage(like)),
    unlikeImage: (like) => dispatch(unlikeImage(like)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchComments: () => dispatch(fetchComments()),
    fetchImages: () => dispatch(fetchImages())

  };
};

export default connect(mstp, mdtp)(modalImageWindowContainer);
