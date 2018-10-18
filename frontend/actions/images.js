import * as APIUtil from '../util/images_api_util';

export const FETCH_IMAGES = "FETCH_IMAGES";
export const FETCH_IMAGE = "FETCH_IMAGE";
export const PASS_IMAGE_ID = "PASS_IMAGE_ID";

export const fetchImages = () => {
  return dispatch => {
    return APIUtil.fetchImages().then(images => {
      return dispatch(fetchAllImages(images))
    });
  };
};

export const fetchImage = (id) => {
  return dispatch => {
    return APIUtil.fetchImage(id).then(image => {
      return dispatch(fetchOneImage(image))
    });
  };
};



const fetchAllImages = (images) => {
  return {
    type: FETCH_IMAGES,
    images
  };
};

const fetchOneImage = (image) => {
  return {
    type: FETCH_IMAGE,
    image
  };
};

export const getImageId = (id) => {
  return{
    type: PASS_IMAGE_ID,
    formType: 'image-click',
    id
  }
}
