import { FETCH_IMAGES, FETCH_IMAGE, PASS_IMAGE_ID } from '../actions/images';
import { merge } from 'lodash';


const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case FETCH_IMAGES:
      return merge({}, state, action.images);
    case FETCH_IMAGE:
      return merge({}, state, {[action.image.id]: action.image});
    default:
    return state;
  };
};

export default imagesReducer;
