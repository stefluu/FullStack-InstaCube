
import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchImage } from '../../actions/images';
import ProfileTile from '../images/profile_tile'


class ModalImage extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="modal-image">
        <img className="profile-tile" src = {this.props.image.photo_url}/>
      </div>
    )
  };
};

export default withRouter(ModalImage);
