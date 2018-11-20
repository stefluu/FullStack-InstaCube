import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import imagesReducer from './images_reducer';
import likesReducer from './likes_reducer';
import followingsReducer from './followings_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
  likes: likesReducer,
  followings: followingsReducer,
  comments: commentsReducer
});

export default entitiesReducer;
