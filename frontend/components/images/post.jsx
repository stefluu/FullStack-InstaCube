import React from 'react';
import { Link } from 'react-router-dom';
import LikesContainer from '../likes/likes_container'

const IndexPosts = props => {
  let userId = props.image.user_id;
  let users = props.users;
  let user = users[userId];
  let username = user.username
  return(
    <div className="entire-post">
      <section className="postheader">
        <Link to={`/users/${userId}`}>{username}</Link>
      </section>

      <img className="image-post" src = {props.image.photo_url}/>

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

      <section className="post-icons">
        <i className="far fa-heart"></i>
        <i class="far fa-comment"></i>
        <i class="fa fa-upload" aria-hidden="true"></i>
      </section>
      <div className="under-icons">
        <section className="post-likes">
          <LikesContainer image={props.image} />
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

export default IndexPosts;
