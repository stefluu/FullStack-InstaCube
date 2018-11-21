import React from 'react';
import { withRouter } from "react-router-dom";

class Comments extends React.Component {
    
    constructor(props){
        super(props);
    }


  render() {
    let allComments = Object.values(this.props.comments);

    const imageComments = allComments.filter((comment) => {
        if(comment.img_id === this.props.imageId){
            return comment
        }
    });

    // console.log(imageComments.slice(-4))

    let commentBox = imageComments.length > 4 ? 
        (<ul className="comment-li">
          <li className="loadMoreComments">Load more comments</li>
          {imageComments.slice(-4).map(comment => <li key={comment.id}>
              <span>{this.props.users[comment.user_id].username} </span>
              {comment.body}
            </li>)}
        </ul>
            ) : (
        <ul className="comment-li">
          {imageComments.map(comment => <li key={comment.id}>
              <span>{this.props.users[comment.user_id].username} </span>
              {comment.body}
            </li>)}
        </ul>)

    return (
      <div>
        {commentBox}
      </div>
    )
  }
}

export default withRouter(Comments);


{/* <ul className="comment-li">
    {imageComments.map(comment => (
        <li key={comment.id}>
            <span>{(this.props.users[comment.user_id]).username} </span>
            {comment.body}
        </li>
    ))}
</ul> */}


{/* <ul className="comment-li">
    {Object.values(this.props.comments).map(comment => (
        <li key={comment.id}>
            <span>{(this.props.users[comment.user_id]).username} </span>
            {comment.body}
        </li>
    ))}
</ul> */}