
import React from 'react';
import { connect } from 'react-redux';
import Likes from './likes';
import { likeImage, unlikeImage } from '../../actions/likes';

const mstp = (state, ownProps) => {
  return{
    image: ownProps.image
  };
};

const mdtp = (dispatch) => {
  return{
    like: () => dispatch(likeImage),
    unlike: () => dispatch(unlikeImage)
  };
};

export default connect(mstp, mdtp)(Likes)
