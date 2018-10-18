import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import imagesReducer from './images_reducer';
import allLikesReducer from './all_likes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
  likes: allLikesReducer
});

export default entitiesReducer;
