import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ModalWindowContainer from './modal_window_container';
import ModalImageWindowContainer from './modal_image_window_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'logout':
      component = <ModalWindowContainer />;
      break;
    case 'image-click':
      component = <ModalImageWindowContainer />;
      break;
    default:
      component = null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child">
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    imageId: state.imageId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
