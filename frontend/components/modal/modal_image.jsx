
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
        <img className="profile-tile"
          src = {this.props.image.photo_url}
          onClick={e => e.stopPropagation()}/>
      </div>
    )
  };
};

export default withRouter(ModalImage);

//stop prop on img so that its the only thing that keeps the modal propogating. 
