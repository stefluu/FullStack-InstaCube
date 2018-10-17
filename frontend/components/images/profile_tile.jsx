import React from 'react';

const ProfileTile = props => {

  return(
    <div>
      <div className="profile-tile-box">
          <img className="profile-tile" src = {props.image.photo_url}/>
      </div>
    </div>
  )
}

export default ProfileTile;
