
import React from 'react';
import { connect } from 'react-redux';
import Likes from './likes'

const mstp = (state, ownProps) => {
  return{
    image: state.entities.images[ownProps.userId]
  };
};

// const mdtp = (dispatch) => {
//   return{
//
//   };
// };

export default connect(mstp, null)(Likes)
