import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalImageContainer from './modal_image_container';

class modalImageWindow extends React.Component {
  render(){

    return(
      <div className="entire-modal-image-window"
            onClick={e => e.stopPropagation()}>
        <div className="modal-image-everything">
          <ModalImageContainer />;


          <aside className="modal-image-window-aside">
            <ul>
              <li><span>hey_itsStef</span>  nice!</li>
              <li><span>its_aUser</span>  this is cute!</li>
            </ul>

            <section className="modal-window-bottom">
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-bookmark"></i>
                <h4>1 like</h4>
                <h4>NOVEMBER 6</h4>
                <input className="addcommentbox" type="text" placeholder="Add a comment..."></input>
            </section>
          </aside>
      </div>

      </div>
    )
  }
}

export default withRouter(modalImageWindow);
