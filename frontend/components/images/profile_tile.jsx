import React from 'react';
import { fetchImage } from "../../actions/images";
import { withRouter } from 'react-router-dom';
import ModalImage from "../modal/modal_image";


const ProfileTile = props => {
  return(

    <div className="profile-tile-box">
      <img
        className="profile-tile"
        onClick={() => {
          props.getImageId(props.image.id);
          props.openModal('image-click');
        }}
        src = {props.image.photo_url}/>
    </div>
  )
}

export default ProfileTile;
