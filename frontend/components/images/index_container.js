import React from 'react'
import { connect } from 'react-redux';
import IndexContainer from './index';
import { fetchImages } from '../../actions/images'


const mstp = (state) => {
  return {
    currentUserId: Object.values(window.currentUser)[0].id,
    images: Object.values(state.entities.images),
    users: state.entities.users
  };
};

const mdtp = (dispatch) => {
  return{
    fetchImages: () => dispatch(fetchImages())
  };
};

export default connect(mstp, mdtp)(IndexContainer);
