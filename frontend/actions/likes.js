import * as APIUtil from '../util/likes_api_util';

export const LIKE_IMAGE = "LIKE_IMAGE";
export const UNLIKE_IMAGE = "UNLIKE_IMAGE";
export const FETCH_LIKES = "FETCH_LIKES";
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
    return APIUtil.unlikeImage(likeId).then((like) => {
      return dispatch(unlikeAnImage(like));
    });
  };
};

export const fetchAllLikes = () => {
  return dispatch => {
    return APIUtil.fetchAllLikes().then(likes =>{
      return dispatch(fetchLikes(likes));
    })
  }
}

// export const toggleLike = (imageId) => {
//   return{
//     type: TOGGLE_LIKE,
//     imageId
//   }
// }
const fetchLikes = (likes) => {
  return{
    type: FETCH_LIKES,
    likes
  };
};

const likeAnImage = (like) => {
  return{
    type: LIKE_IMAGE,
    like
  };
};

const unlikeAnImage = (like) => {
  return{
    type: UNLIKE_IMAGE,
    like
  };
};
