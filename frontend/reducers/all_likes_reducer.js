import { FETCH_ALL_LIKES } from '../actions/likes';
import { merge } from 'lodash';

const allLikesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_LIKES:
      return merge ({}, state, action.likes);
    default:
      return state
  };
};


export default allLikesReducer;
