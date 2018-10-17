
import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import ModalImage from './modal_image';
import { fetchImage } from '../../actions/images';

const mstp = (state) => {
  return {
    formType: 'image-click'
  };
};

const mdtp = (dispatch) => {
  return{
    fetchImage: (id) => dispatch(fetchImage(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mdtp)(ModalImage);
