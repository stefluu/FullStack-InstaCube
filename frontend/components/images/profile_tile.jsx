import React from 'react';
import { fetchImage } from "../../actions/images";
import { withRouter } from 'react-router-dom';
import ModalImage from "../modal/modal_image";

const ProfileTile = props => {
  return(
    <div>
      <div className="profile-tile-box">
          <img
            className="profile-tile"
            onClick={() => props.openModal()}
            src = {props.image.photo_url}/>
      </div>
    </div>
  )
}

export default ProfileTile;
