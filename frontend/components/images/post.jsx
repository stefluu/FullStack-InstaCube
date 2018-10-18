import React from 'react';
import { Link } from 'react-router-dom';
import LikesContainer from '../likes/likes_container';



// const IndexPosts = this.props => {
class IndexPosts extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUsers();
  }


  render(){
    console.log(this.props.image)
    let heart;
    // let currentUser = users[this.state.session.currentUserId];
    let currentUserKeys = Object.keys(this.props.currentUser);

    if (currentUserKeys.includes(this.props.image.id)){
      heart = <i className="fas fa-heart"></i>
    } else {
      heart = <i className="far fa-heart"></i>
    }

    let userId = this.props.image.user_id;
    let users = this.props.users;
    let user = users[this.props.image.user_id];
    let username = user.username
    return(
      <div className="entire-post">
        <section className="postheader">
          <Link to={`/users/${userId}`}>{username}</Link>
        </section>

        <img className="image-post" src = {this.props.image.photo_url}/>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

        <section className="post-icons">
          <section className="like-button" >
            {heart}
          </section>

          <i className="far fa-comment"></i>
          <i className="fa fa-upload" aria-hidden="true"></i>
        </section>
        <div className="under-icons">
          <section className="post-likes">
            <h4 className="likes">_ likes</h4>
          </section>

          <section className="comments">
            <ul className="comment-li">
              <li>comment1 gafghjdfojo;jkfo;s</li>
              <li>comment2 kafjodfjof</li>
              <li>comment3 fdgkahidfjlajfl</li>
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
