

export const likeImage = (imageId) => {
  return $.ajax({
    url: `api/images/${image_id}/likes`,
    method: 'POST',
    data: { imageId }
  });
};

export const unlikeImage = (imageId, likeId) => {
  return $.ajax({
    url: `api/images/${image_id}/likes/${likeId}`,
    method: 'DELETE',
    data: { imageId, likeId }
  });
};

export const fetchUserLikes = () => {
  return $.ajax({
    url: 'api/likes',
    method: 'GET'
  });
};
