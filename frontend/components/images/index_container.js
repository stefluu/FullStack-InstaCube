import React from 'react'
import { connect } from 'react-redux';
import IndexContainer from './index';
import { fetchImages } from '../../actions/images';
import { fetchUsers } from '../../actions/users';


const mstp = (state) => {
  return {
    currentUserId: Object.values(window.currentUser)[0].id,
    images: Object.values(state.entities.images),
    users: state.entities.users
  };
};

const mdtp = (dispatch) => {
  return{
    fetchImages: () => dispatch(fetchImages()),
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mstp, mdtp)(IndexContainer);
