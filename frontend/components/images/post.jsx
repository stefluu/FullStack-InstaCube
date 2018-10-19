import React from 'react';
import { Link } from 'react-router-dom';
import LikesContainer from '../likes/likes_container';



// const IndexPosts = this.props => {
class IndexPosts extends React.Component{
  constructor(props){
    super(props)
  }
  //
  // componentDidMount(){
  //   this.props.fetchUserLikes();
  // }

    // let currentUserLikes = Object.values(this.props.likes);
    // let currentUserLikesImages = currentUserLikes.map((like) =>
    //   (
    //     like.img_id
    //   ))
    // let heart = (currentUserLikesImages.includes(this.props.image.id)) ?
    //   (<i
    //   className="fas fa-heart"
    //   onClick={() => console.log('liked')}></i>
    // ) : (
    //   (<i
    //   className="far fa-heart"
    //   onClick={() => console.log("unlike")}></i>
    // ));

    //   let currentUserLikesImages = currentUserLikes.map((like) => (
    //     like.user_id)
    //
    // )
    //   let currentUserLikesImages = currentUserLikes.map((like) => (
    //   like.user_id);
    //
    //   if (currentUserLikesImages.includes(imageId)){
    //     // heart = "fas"
    //     heart =
    //     <i
    //       className="fas fa-heart"
    //       onClick={() => console.log('liked')}></i>
    //   } else {
    //     // heart = "far"
    //     heart =
    //     <i
    //       className="far fa-heart"
    //       onClick={() => console.log("unlike")}></i>
    //   }
    // })



  render(){
    let imageId = this.props.image.id
    let userId = this.props.image.user_id;
    let users = this.props.users;
    let user = users[this.props.image.user_id];
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
      className="fas fa-heart"
      onClick={() => this.props.unlikeImage(currentLike.id)}></i>
    ) : (
      (
        <i
      className="far fa-heart"
      onClick={() => this.props.likeImage({img_id: imageId})}></i>
    ));

    return(
      <div className="entire-post">
        <section className="postheader">
          <Link to={`/users/${userId}`}>{username}</Link>
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
            <h4 className="likes">_ likes</h4>
          </section>

          <section className="comments">
            <ul className="comment-li">
              <li>hello_pup This is great!</li>
              <li>hihihi This is a comment!</li>
              <li>Im_aUser This is another comment!</li>
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
