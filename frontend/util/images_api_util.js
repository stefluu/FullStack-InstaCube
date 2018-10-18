
export const fetchImages = () => {
  return $.ajax({
    url: 'api/images',
    method: 'GET'
  });
};

export const fetchImage = (id) => {
  return $.ajax({
    url: `api/images/${id}`,
    method: 'GET',
    data: { id }
  });
};

export const passImageId = (image) => {
  return $.ajax({
    url: `api/images/${image.id}`,
    method: 'GET',
    data: { image }
  });
};
