import React from 'react';

const IndexPosts = props => {
  let userId = props.image.user_id;
  let users = props.users;

  let user = users[userId];

  let username = user.username
  return(
    <div>
      <section className="postheader">
        {username}
      </section>

      <img className="image-post" src = {props.image.photo_url}/>
      <section className="post-icons"/>
      <section className="post-likes"/>
      <section className="comments"/>
      <input className="addcommentbox" type="text" placeholder="Add a comment..."></input>
    </div>
  )
}

export default IndexPosts;
