import { PASS_IMAGE_ID } from '../actions/images';

const imageIdReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PASS_IMAGE_ID:
      return action.id;
    default:
      return state;
  };
};

export default imageIdReducer;
