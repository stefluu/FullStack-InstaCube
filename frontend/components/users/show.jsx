import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar';
import ProfileTileContainer from '../images/profile_tile_container';

class Show extends React.Component {

  componentDidMount(){
    this.props.fetchImages();
    this.props.fetchUsers();
    this.props.fetchLikes();
    // let currentUserId = Object.values(currentUser)[0].id;
    this.props.fetchFollows();
  };

  goToUpdate(){
    this.props.history.push('/account/edit')
  }

  render(){
  
    let profileOwner = this.props.users[this.props.userId];
    if (!profileOwner) return null;

    let profileOwnerPosts = 
      this.props.images.filter(image => (
      (image.user_id == this.props.userId)
    ))
    
    //follow/unfollow
    let editOrFollowButton;
    let currentUserId = parseInt(Object.keys(currentUser)[0]);
    // let currentUserId = this.props.userId;
    let isCurrentUserProf = (currentUserId === profileOwner.id)
    
   
    const allFollows = Object.values(this.props.followings);
    const currentUserFollowersIds = [];
    const currentUsersFollows = [];
    

    for (let i = 0; i < allFollows.length; i++) {

      if (allFollows[i].user_id === currentUserId){
        currentUsersFollows.push(allFollows[i]);
      }

      if ((allFollows[i].user_id === currentUserId) &&
        (!currentUserFollowersIds.includes(allFollows[i].follower_id))
      ) {
        currentUserFollowersIds.push(allFollows[i].follower_id);
      }
    }

    let potentialFollowDeletion;
    if (currentUserFollowersIds.includes(this.props.userId)) {
      // currentLike = this.props.likes[currentUserFollowersIds.indexOf(imageId)]
      for(let i = 0; i < currentUsersFollows.length; i++){
        if ((currentUsersFollows[i].user_id === currentUserId) && 
          (currentUsersFollows[i].follower_id === this.props.userId)){
            potentialFollowDeletion = currentUsersFollows[i].id
          }
      }
      // let followsKeys = Object.keys(currentUsersFollows)
      // debugger
      // potentialFollowDeletion = followsKeys[currentUserFollowersIds.indexOf(this.props.userId)];
      // potentialFollowDeletion = parseInt(potentialFollowDeletion);
    }
    

    if (isCurrentUserProf){
      editOrFollowButton = 
      <div>
        <button id="editProfButton"
                onClick={() => 
                  this.goToUpdate()} 
        >Edit Profile
        </button>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
  
        <i id="edit-icon" className="fas fa-circle-notch" onClick={() => this.props.openModal('logout')}></i>
      </div>
    } else if(currentUserFollowersIds.includes(this.props.userId)){
      editOrFollowButton =
        <button
          // id="follow-button"
          onClick={() =>
            this.props.unfollow(potentialFollowDeletion)}
        >Following
      </button>;
      
    } else {
      editOrFollowButton = 
      <button 
        id="follow-button"
        onClick={() => 
          this.props.follow({ follower_id: this.props.userId })}
      >Follow
      </button>;
    }

    //top portion: post count/followers/following
    //post Count
    let postCount = profileOwnerPosts.length;

    //followers/following
    let followerCount = 0;
    let followingCount = 0;

    for(let followingId in this.props.followings){
      if(this.props.userId === this.props.followings[followingId].user_id){
        if(this.props.userId === currentUserId){
          followingCount += 1
        } else {
          followerCount += 1
        }
      } else if (this.props.userId === this.props.followings[followingId].follower_id){
        if (this.props.follower_id === currentUserId) {
          followingCount += 1
        } else {
          followerCount += 1
        }
      }
    }
    
    return(
      <div>
        <NavBarContainer />

        <div className="entire-show-container">
          <div className="usershow-top">
            <section id="usershow-avatar">
              {/* <img src={profileOwner.avatar_url}/> */}
              <img className="standin-avatar" src="https://s3-us-west-1.amazonaws.com/instacube-dev/Screen+Shot+2018-10-17+at+11.53.21+PM.png" />
            </section>

            <section className="user-info">
              <section className="user-edit-modal">
                <h4 className="showpage-username"> {profileOwner.username} </h4>
                {/* <button>Edit Profile</button> */}
                {editOrFollowButton}

                {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

                <i className="fas fa-circle-notch" onClick={() => this.props.openModal('logout')}></i> */}
              </section>

              <section className="posts-followers-following">
                <li><span>{postCount}</span> posts</li>
                <li><span>{followerCount}</span> followers</li>
                <li><span>{followingCount}</span> following</li>
              </section>

              <section className="displayname-bio">
                <h3>{profileOwner.display_name}</h3>
                <h3 id="bio">{profileOwner.bio}</h3>
              </section>

            </section>
          </div>

          <section className="posts-igtv-saved-tagged">
            <ul className="middle-tabs">
              <li><i className="fas fa-th"></i> POSTS</li>
              <li><i className="far fa-square"></i> IGTV</li>
              <li><i className="far fa-bookmark"></i> SAVED</li>
              <li><i className="fas fa-user-tag"></i> TAGGED</li>
            </ul>
          </section>

          <div className="profile-tile-container">
            <ul className="profile-ul">
              <section className="profile-posts">
                {this.props.images.filter(image => (
                  (image.user_id == this.props.userId)
                )).map(image => (
                  <li key={image.id}>
                    <ProfileTileContainer image={image} openModal={ this.props.openModal}/>
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
