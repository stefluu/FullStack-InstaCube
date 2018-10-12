
import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../actions/modal_actions';
import ModalWindow from './modal_window';

const mdtp = (dispatch) => {
  return{
    processForm: (user) => dispatch(logout(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(ModalWindow);
