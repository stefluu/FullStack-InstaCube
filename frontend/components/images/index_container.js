import React from 'react'
import { connect } from 'react-redux';
import IndexContainer from './index';
import { fetchImages } from '../../actions/images';
import { fetchUsers } from '../../actions/users';
import { fetchAllLikes } from '../../actions/likes';
import { fetchFollows } from "../../actions/followings";

// import { clearSessionErrors } from '../../actions/session'


const mstp = (state) => {
  return {
    // currentUserId: Object.values(window.currentUser)[0].id,
    currentUserId: state.session.currentUserId,
    images:state.entities.images,
    users: state.entities.users,
    likes: state.entities.likes,
    followings: state.entities.followings
  };
};

const mdtp = (dispatch) => {
  return{
    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllLikes: () => dispatch(fetchAllLikes()),
    fetchFollows: () => dispatch(fetchFollows())
    // clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mstp, mdtp)(IndexContainer);
