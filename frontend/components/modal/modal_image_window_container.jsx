import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalImageContainer from './modal_image_container';
import Comments from '../comments/comments';

class modalImageWindowContainer extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchComments();
    this.props.fetchUsers();
    this.props.fetchImages();
  }

  render(){
    if (!currentUser) return null;

    let allLikes = Object.values(this.props.likes);
    let currentUserLikes = [];

    for (let i = 0; i < allLikes.length; i++) {
      if (allLikes[i].user_id === this.props.currentUserId &&
        (!currentUserLikes.includes(allLikes[i].img_id))
      ) {
        currentUserLikes.push(allLikes[i].img_id)
      }
    }


    let currentLikeId;
    if (currentUserLikes.includes(this.props.imageId)) {
      let likesKeys = Object.keys(this.props.likes)
      currentLikeId = likesKeys[currentUserLikes.indexOf(this.props.imageId)];
      currentLikeId = parseInt(currentLikeId);

    }

    let heart = (currentUserLikes.includes(this.props.imageId)) ?
      (<i
        className="fas fa-heart" id="redHeart"
        onClick={() => this.props.unlikeImage(currentLikeId)}></i>
      ) : (
        (
          <i
            className="far fa-heart"
            onClick={() => this.props.likeImage({ img_id: this.props.imageId })}></i>
        ));

    let likeCount = 0;
    for (let i = 0; i < allLikes.length; i++) {
      if (allLikes[i].img_id === this.props.imageId) {
        likeCount += 1
      }
    }

    return(
      <div className="entire-modal-image-window"
            onClick={e => e.stopPropagation()}>
        {/* <div className="modal-image-everything"> */}
          <ModalImageContainer />


          <aside className="modal-image-window-aside">

          <hr />
            <p className="caption">{this.props.images[this.props.imageId].caption} </p>

            <Comments 
              imageId={this.props.imageId} 
              comments={this.props.comments} 
              users={this.props.users}/>
            {/* <ul>
              <li><span>hey_itsStef</span>  nice!</li>
              <li><span>its_aUser</span>  this is cute!</li>
            </ul> */}

            <section className="modal-window-bottom">
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

              {heart}

                <i className="far fa-comment"></i>
                <i className="far fa-bookmark"></i>
                <h4>{likeCount} like</h4>
                <h4>NOVEMBER 6</h4>
                <input className="addcommentbox" type="text" placeholder="Add a comment..."></input>
            </section>
          </aside>
      {/* </div> */}

      </div>
    )
  }
}

export default withRouter(modalImageWindowContainer);
