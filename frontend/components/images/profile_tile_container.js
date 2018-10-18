
import { connect } from 'react-redux';
import React from 'react';
import { getImageId } from "../../actions/images";
import ProfileTile from './profile_tile';

const mstp = (state, ownProps) => {
  return {
    image: ownProps.image,
    openModal: ownProps.openModal
  };
};

const mdtp = (dispatch) => {
  return {
    getImageId: (id) => dispatch(getImageId(id))
  };
};

export default connect(mstp, mdtp)(ProfileTile);
