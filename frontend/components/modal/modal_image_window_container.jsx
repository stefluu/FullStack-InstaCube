import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalImageContainer from './modal_image_container';

const modalImageWindow = props => {
  return(
    <div className="entire-modal-image-window">
      <ModalImageContainer />;

      <aside className="modal-image-window-aside">
        comments go here
      </aside>
    </div>
  )
}

export default withRouter(modalImageWindow);
