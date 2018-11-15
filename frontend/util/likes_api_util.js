
// export const likeImage = (like, imageId) => {
//   return $.ajax({
//     url: `api/images/${imageId}/likes`,
//     method: "POST",
//     data: { like }
//   });
// };

// export const unlikeImage = (likeId, imageId) => {
//   return $.ajax({
//     url: `api/images/${imageId}/likes/${likeId}`,
//     method: "DELETE",
//     data: { likeId,
//             imageId }
//   });
// };

// export const fetchAllLikes = (imageId) => {
//   return $.ajax({
//     url: `api/images/${imageId}/likes`,
//     method: 'GET'
//   });
// };



export const likeImage = (like) => {
  return $.ajax({
    url: 'api/likes',
    method: 'POST',
    data: { like }
  });
};

export const unlikeImage = (likeId) => {
  return $.ajax({
    url: `api/likes/${likeId}`,
    method: 'DELETE',
    data: { likeId }
  });
};

export const fetchAllLikes = () => {
  return $.ajax({
    url: 'api/likes',
    method: 'GET'
  });
};
