
import React from 'react';
import { connect } from 'react-redux';
import { likeImage, unlikeImage, fetchAllLikes } from '../../actions/likes';
import Post from './post';
import { fetchUsers } from '../../actions/users';

const mstp = (state, ownProps) => {
  return{
    image: ownProps.image,
    likes: state.entities.likes,
    users: state.entities.users,
    currentUserId: state.session.currentUserId
  };
};

const mdtp = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchLikes: () => dispatch(fetchAllLikes()),
    likeImage: (like) => dispatch(likeImage(like)),
    unlikeImage: (like) => dispatch(unlikeImage(like))
  };
};

export default connect(mstp, mdtp)(Post);
