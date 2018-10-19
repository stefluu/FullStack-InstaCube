
import { LIKE_IMAGE, UNLIKE_IMAGE } from '../actions/likes';
import { merge } from 'lodash';

const likesReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKE_IMAGE:
      return merge({}, state, {[action.like.id]: action.like});
    case UNLIKE_IMAGE:
      let newState = merge({}, state);
      delete newState[action.likeId.id]
      return newState;
    default:
      return state
  }
}


export default likesReducer;
