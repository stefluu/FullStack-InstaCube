import React from 'react';
import { Link } from 'react-router-dom';
import LikesContainer from '../likes/likes_container';



// const IndexPosts = this.props => {
class IndexPosts extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchLikes();
  }

  render(){
    let imageId = this.props.image.id
    let userId = this.props.image.user_id;
    let users = this.props.users;
    let user = users[this.props.image.user_id];
    if (!user) return null;
    let username = user.username

    let currentUserLikes = Object.values(this.props.likes);
    let currentUserLikesImages = currentUserLikes.map((like) =>
      (
        like.img_id
      ))

    let currentLike;
    if (currentUserLikesImages.includes(this.props.image.id)){
      currentLike = currentUserLikes[currentUserLikesImages.indexOf(this.props.image.id)]
    }
    // console.log(currentLike)
    let heart = (currentUserLikesImages.includes(this.props.image.id)) ?
      (<i
      className="fas fa-heart" id="redHeart"
      onClick={() => this.props.unlikeImage(currentLike.id)}></i>
    ) : (
      (
        <i
      className="far fa-heart"
      onClick={() => this.props.likeImage({img_id: imageId})}></i>
    ));

    if (!username) return null;
    return(


      <div className="entire-post">
        <section className="postheader">
          <img className="standin-avatar-post" src="https://s3-us-west-1.amazonaws.com/instacube-dev/Screen+Shot+2018-10-17+at+11.53.21+PM.png" />
          <a className="username-post-link" href={`/#/users/${userId}`}>{username}</a>
          <h5>San Francisco, CA</h5>
        </section>

        <img className="image-post" src = {this.props.image.photo_url}/>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

        <section className="post-icons">

          {heart}


          <i className="far fa-comment"></i>
          <i className="fa fa-upload" aria-hidden="true"></i>
        </section>
        <div className="under-icons">
          <section className="post-likes">
            <h4 className="likes">6 likes</h4>
          </section>

          <h5>{this.props.image.date}</h5>

          <section className="comments">
            <ul className="comment-li">
              <li><span>hello_pup</span> This is great!</li>
              <li><span>hihihi</span> This is a comment!</li>
              <li><span>Im_aUser</span> This is another comment!</li>
            </ul>
          </section>

          <hr/>
          <input className="addcommentbox" type="text" placeholder="Add a comment..."></input>
        </div>
      </div>
    )
  }
}

export default IndexPosts;

// <LikesContainer image={this.props.image} />

// (this.props.likeImage({img_id: imageId, user_id: this.props.currentUser.id}))}>


// <section className="like-button" onClick={() => this.toggleLike()
// }>
// </section>

// <i
//   className="far fa-heart"
//   onClick={() => this.toggleLike()}></i>
