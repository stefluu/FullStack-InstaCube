

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

export const fetchUserLikes = () => {
  return $.ajax({
    url: 'api/likes',
    method: 'GET'
  });
};
