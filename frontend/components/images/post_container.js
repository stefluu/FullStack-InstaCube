
import React from 'react';
import { connect } from 'react-redux';
import { likeImage, unlikeImage, fetchAllLikes } from '../../actions/likes';
import Post from './post';
import { fetchUsers } from '../../actions/users';
import { comment, fetchComments } from '../../actions/comments';

const mstp = (state, ownProps) => {
  return{
    image: ownProps.image,
    likes: state.entities.likes,
    users: state.entities.users,
    currentUserId: state.session.currentUserId,
    comments: state.entities.comments
  };
};

const mdtp = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchLikes: () => dispatch(fetchAllLikes()),
    likeImage: (like) => dispatch(likeImage(like)),
    unlikeImage: (like) => dispatch(unlikeImage(like)),
    comment: (userComment, imageId) => dispatch(comment(userComment, imageId)),
    fetchComments: (imageId) => dispatch(fetchComments(imageId))
  };
};

export default connect(mstp, mdtp)(Post);
