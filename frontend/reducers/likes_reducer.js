
import { LIKE_IMAGE, UNLIKE_IMAGE } from '../actions/likes';
import { merge } from 'lodash';

const likesReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_IMAGE:
      return merge({}, state + action.like);
    case UNLIKE_IMAGE:
      return (state - action.like);
    default:
      return state
  }
}


export default likesReducer;
