
import { LIKE_IMAGE, UNLIKE_IMAGE } from '../actions/likes';

const likesReducer = (state = 0, action) => {
  switch (action.type) {
    case LIKE_IMAGE:
      return (state + action.like);
    case UNLIKE_IMAGE:
      return (state - action.like);
    default:
      return state
  }
}


export default likesReducer;
