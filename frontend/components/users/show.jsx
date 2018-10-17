import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar';
import ProfileTile from '../images/profile_tile'

class Show extends React.Component {

  componentDidMount(){
    this.props.fetchImages()
  };

  render(){
    return(
      <div>
        <NavBarContainer />

        <div className="entire-show-container">
          <div className="usershow-top">
            <section id="usershow-avatar"></section>

            <section id="user-info">
              <section id="user-edit-modal">
                <h4> {this.props.currentUser.username} </h4>
                <button>Edit Profile</button>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

                <i class="fas fa-circle-notch" onClick={() => this.props.toggleModal()}></i>
              </section>

              <h3> {this.props.currentUser.bio} bio that doesn't exist</h3>

            </section>
          </div>
          <div className="profile-tile-container">
            <ul>
              <section className="profile-posts">
                {Object.values(this.props.images).filter(image => (
                  (image.user_id === this.props.currentUserId)
                )).map(image => (
                  <li>
                    <ProfileTile image={image} />
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
