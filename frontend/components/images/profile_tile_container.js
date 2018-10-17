
import { connect } from 'react-redux';
import React from 'react';
import { fetchImage } from '../../actions/images';
import ProfileTile from './profile_tile';

const mstp = (state) => {
  return {
    image: state.image
  };
};

const mdtp = (dispatch) => {
  return {
    fetchImage: (id) => dispatch(fetchImage(id)),
  };
};

export default connect(null, mdtp)(ProfileTile);
