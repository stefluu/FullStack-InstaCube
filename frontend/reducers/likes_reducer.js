
import { LIKE_IMAGE, UNLIKE_IMAGE, FETCH_LIKES } from '../actions/likes';
import { merge } from 'lodash';

const likesReducer = (state = {}, action) => {
  
  
  switch (action.type) {
    case LIKE_IMAGE:
      return merge({}, state, {[action.like.id]: action.like})
      // if(!state[action.like.user_id]){
      //   state[action.like.user_id] = []
      // }
      // let prevArr = state[action.like.user_id]

      // if(!prevArr.includes(action.like.img_id)){
      //   prevArr.push(action.like.img_id)
      // }
      // return merge({}, state, {[action.like.user_id]: prevArr});

    case UNLIKE_IMAGE:
      let newState = merge({}, state);
      // let userLikes = newState[action.like.user_id]

      // let likeToDeleteIdx = userLikes.indexOf(action.like.id)
      delete newState[action.like.id]
      // newState1 = newState.slice(0, likeToDeleteIdx);
      // newState2 = newState.slice(likeToDeleteIdx+1);

      // newState = newState1.concat(newState2);
      
      return newState;

    case FETCH_LIKES:
      return merge({}, state, action.likes)

    default:
      return state
  }
}


export default likesReducer;
