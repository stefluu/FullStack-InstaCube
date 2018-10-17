import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar';
import ProfileTile from '../images/profile_tile';

class Show extends React.Component {

  componentDidMount(){
    this.props.fetchImages();
    this.props.fetchUsers();
  };

  render(){
    // let idStart = window.location.hash.search(/[0-9]/);
    // let userProfileId = parseInt(window.location.hash.slice(idStart));
    let profileOwner = this.props.users[this.props.userId];

    if (!profileOwner) return null;

    return(
      <div>
        <NavBarContainer />

        <div className="entire-show-container">
          <div className="usershow-top">
            <section id="usershow-avatar"></section>

            <section id="user-info">
              <section className="user-edit-modal">
                <h4 id="showpage-username"> {profileOwner.username} </h4>
                <button>Edit Profile</button>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

                <i class="fas fa-circle-notch" onClick={() => this.props.openModal()}></i>
              </section>

              <section className="posts-followers-following">
                <li><span>6</span> posts</li>
                <li><span>73</span> followers</li>
                <li><span>181</span> following</li>
              </section>

              <section className="displayname-bio">
                <h3>{profileOwner.display_name}</h3>
                <h3>{profileOwner.bio}</h3>
              </section>

            </section>
          </div>

          <section className="posts-igtv-saved-tagged">
            <ul className="middle-tabs">
              <li><i class="fas fa-th"></i> POSTS</li>
              <li><i class="far fa-square"></i> IGTV</li>
              <li><i class="far fa-bookmark"></i> SAVED</li>
              <li><i class="fas fa-user-tag"></i> TAGGED</li>
            </ul>
          </section>

          <div className="profile-tile-container">
            <ul className="profile-ul">
              <section className="profile-posts">
                {Object.values(this.props.images).filter(image => (
                  (image.user_id === this.props.userId)
                )).map(image => (
                  <li>
                    <ProfileTile image={image} openModal={ this.props.openModal}/>
                  </li>
                ))}
              </section>

            </ul>
        </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Show);
