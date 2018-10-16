import React from 'react'
import { connect } from 'react-redux';
import IndexContainer from './index';
import { fetchImages } from '../../actions/images';
import { fetchUsers } from '../../actions/users';
// import { clearSessionErrors } from '../../actions/session'


const mstp = (state) => {
  return {
    // currentUserId: Object.values(window.currentUser)[0].id,
    currentUserId: state.session.currentUserId,
    images:state.entities.images,
    users: state.entities.users
  };
};

const mdtp = (dispatch) => {
  return{
    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers()),
    // clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mstp, mdtp)(IndexContainer);
