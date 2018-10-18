import { FETCH_CURRENT_USER_LIKES } from '../actions/likes';
import { merge } from 'lodash';

const allLikesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_LIKES:
      return merge ({}, state, action.likes);
    default:
      return state
  };
};


export default allLikesReducer;
