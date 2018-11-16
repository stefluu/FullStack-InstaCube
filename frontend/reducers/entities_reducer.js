import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import imagesReducer from './images_reducer';
import likesReducer from './likes_reducer';
import followingsReducer from './followings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
  likes: likesReducer,
  followings: followingsReducer
});

export default entitiesReducer;
