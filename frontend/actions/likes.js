

export const LIKE_IMAGE = "LIKE_IMAGE";
export const UNLIKE_IMAGE = "UNLIKE_IMAGE";
// export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const likeImage = () => {
  return{
    type: LIKE_IMAGE,
    like: true,
    likeCount: 1
  };
};

export const unlikeImage = (imageId) => {
  return{
    type: UNLIKE_IMAGE,
    like: false,
    likeCount: 1
  };
};

// export const toggleLike = (imageId) => {
//   return{
//     type: TOGGLE_LIKE,
//     imageId
//   }
// }
