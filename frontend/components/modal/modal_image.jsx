
import React from 'react';
import { withRouter } from 'react-router-dom';
// import ProfileTile from '../images/profile_tile'


class ModalImage extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="modal-image">
        <div className="modal-image-container">
          <img className="profile-tile" src = {this.props.image.photo_url}/>
        </div>
      </div>
    )
  };
};

export default withRouter(ModalImage);
