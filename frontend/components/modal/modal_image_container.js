
import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import ModalImage from './modal_image';
import { fetchImage } from '../../actions/images';

const mstp = (state) => {
  return {
    formType: 'image-click',
    image: state.entities.images[state.ui.imageId]
  };
};

const mdtp = (dispatch) => {
  return{
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mstp, mdtp)(ModalImage);
