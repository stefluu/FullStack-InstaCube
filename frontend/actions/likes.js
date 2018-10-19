import * as APIUtil from '../util/likes_api_util';

export const LIKE_IMAGE = "LIKE_IMAGE";
export const UNLIKE_IMAGE = "UNLIKE_IMAGE";
export const FETCH_CURRENT_USER_LIKES = "FETCH_CURRENT_USER_LIKES";
// export const TOGGLE_LIKE = "TOGGLE_LIKE";


export const likeImage = (like) => {
  return dispatch => {
    return APIUtil.likeImage(like).then((like) => {
      return dispatch(likeAnImage(like));
    });
  };
};

export const unlikeImage = (likeId) => {
  return dispatch => {
    return APIUtil.unlikeImage(likeId).then((likeId) => {
      return dispatch(unlikeAnImage(likeId));
    });
  };
};

export const fetchUserLikes = () => {
  return dispatch => {
    return APIUtil.fetchUserLikes().then(likes =>{
      return dispatch(fetchCurrentUserLikes(likes));
    })
  }
}

// export const toggleLike = (imageId) => {
//   return{
//     type: TOGGLE_LIKE,
//     imageId
//   }
// }
const fetchCurrentUserLikes = (likes) => {
  return{
    type: FETCH_CURRENT_USER_LIKES,
    likes
  };
};

const likeAnImage = (like) => {
  return{
    type: LIKE_IMAGE,
    like
  };
};

const unlikeAnImage = (likeId) => {
  return{
    type: UNLIKE_IMAGE,
    likeId
  };
};
