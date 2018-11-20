import React from 'react';
import { Link } from 'react-router-dom';
import LikesContainer from '../likes/likes_container';
import { runInThisContext } from 'vm';
import Comments from '../comments/comments';



// const IndexPosts = this.props => {
class IndexPosts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      body: ""
    };
    // this.img_id = "";
  }

  componentDidMount(){
    this.props.fetchLikes();
    this.props.fetchComments();
  }

  render(){
    let imageId = this.props.image.id
    let userId = this.props.image.user_id;
    let users = this.props.users;
    let user = users[this.props.image.user_id];
    if (!user) return null;
    let username = user.username
    
    //Likes
    const allLikes = Object.values(this.props.likes);
    const currentUserLikes = [];

    for(let i = 0; i < allLikes.length; i++){
      if(allLikes[i].user_id === this.props.currentUserId &&
          (!currentUserLikes.includes(allLikes[i].img_id))
        ){
        currentUserLikes.push(allLikes[i].img_id)
      }
    }
    

    let currentLikeId;
    if (currentUserLikes.includes(imageId)){
      let likesKeys = Object.keys(this.props.likes)
      currentLikeId = likesKeys[currentUserLikes.indexOf(imageId)];
      currentLikeId = parseInt(currentLikeId);

    }
    let heart = (currentUserLikes.includes(imageId)) ?
      (<i
      className="fas fa-heart" id="redHeart"
      onClick={() => this.props.unlikeImage(currentLikeId)}></i>
    ) : (
      (
        <i
      className="far fa-heart" id="clearHeart"
      onClick={() => this.props.likeImage({img_id: imageId})}></i>
    ));

    let likeCount = 0;
    for (let i = 0; i < allLikes.length; i++) {
      if (allLikes[i].img_id === imageId){
        likeCount += 1
      }
    }

    let date = new Date(this.props.image.date);
    let dateMonth = date.getMonth();
    let monthStr;
    let dateDay = date.getDate();
    let dateYear = date.getFullYear();
    let currentDate = new Date();

    const months = 
      ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    date = (currentDate.getFullYear() === dateYear) ? (
      `${months[dateMonth]} ${dateDay}`
    ) : (
      `${months[dateMonth]} ${dateDay}, ${dateYear}`
    )
  
    if (!username) return null;

    return(


      <div className="entire-post">
        <section className="postheader">
          <img className="standin-avatar-post" src="https://s3-us-west-1.amazonaws.com/instacube-dev/Screen+Shot+2018-10-17+at+11.53.21+PM.png" />
          <a className="username-post-link" href={`/#/users/${userId}`}>{username}</a>
          <h5 className="postLocation">San Francisco, CA</h5>
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
            <h4 className="likes">{likeCount} likes</h4>
          </section>

          {/* <h5>{this.props.image.date}</h5> */}

          <section className="comments">
            <Comments
              imageId={imageId} 
              comments={this.props.comments} 
              users={this.props.users} />
          </section>

          {/* <h5>{this.props.image.date}</h5> */}
          <h5 id="postDate">{date}</h5>

          <hr id="lineundercomments"/>
          <form
            onSubmit={() =>
              this.props.comment({ body: this.state.body, img_id: imageId }, imageId)}>
            <input className="addcommentbox" 
                type="text" 
                placeholder="Add a comment..."
                onChange={(e) => this.setState({ body: e.target.value})}>
            </input>
          </form>

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
