import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar'
import IndexPosts from './post_container'


class IndexContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
    this.props.fetchUsers();
    this.props.fetchAllLikes();
    this.props.fetchFollows();
    // this.props.clearSessionErrors();
  }

  render(){
    if(!this.props.users) return null;

    const followedUsersIds = [];
    for(let followingId in this.props.followings){
      followedUsersIds.push(this.props.followings[followingId].follower_id)
    }
    
    const followedUsersImages = [];
    for(let imageId in this.props.images){
      if(followedUsersIds.includes(this.props.images[imageId].user_id)){
        followedUsersImages.push(this.props.images[imageId])
      }
    }


    return(

      <div id="images-index">
        <Route exact path='/index' component={NavBarContainer} />
        <div className="news-feed">
          <ul>
            <section className="post">
                {followedUsersImages.map(image => (
                <li key={image.id}>
                  <IndexPosts image={image} users={this.props.users}/>
                </li>
              ))}

          </section>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(IndexContainer);
