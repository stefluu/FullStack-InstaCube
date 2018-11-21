import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalImageContainer from './modal_image_container';
import Comments from '../comments/comments';

class modalImageWindowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      body: ""
    };
  };

  componentDidMount(){
    this.props.fetchComments();
    this.props.fetchUsers();
    this.props.fetchImages();
  }

  handleSubmit(e) {
    e.preventDefault();
    let imageId = this.props.imageId;
    let commentBody = this.state.body;
    this.props.comment({ body: commentBody, img_id: imageId });
    this.setState({ body: "" });
    //this set state isnt working to claer the input
  };

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
        className="fas fa-heart" id="redHeartModal"
        onClick={() => this.props.unlikeImage(currentLikeId)}></i>
      ) : (
        (
          <i
            className="far fa-heart" id="clearHeartModal"
            onClick={() => this.props.likeImage({ img_id: this.props.imageId })}></i>
        ));

    let likeCount = 0;
    for (let i = 0; i < allLikes.length; i++) {
      if (allLikes[i].img_id === this.props.imageId) {
        likeCount += 1
      }
    }

    let username = this.props.users[this.props.currentUserId].username

    return <div className="entire-modal-image-window" onClick={e => e.stopPropagation()}>
        {/* <div className="modal-image-everything"> */}
        <ModalImageContainer />

        <aside className="modal-image-window-aside">
          <div id="aside-top">
            <b>{username}</b>
          </div>
          <hr />
          <p className="caption">
            <b> {username} </b>
            {this.props.images[this.props.imageId].caption}
          </p>
          <div className="modalComments">
            <Comments imageId={this.props.imageId} comments={this.props.comments} users={this.props.users} />
          </div>
          {/* <ul>
              <li><span>hey_itsStef</span>  nice!</li>
              <li><span>its_aUser</span>  this is cute!</li>
            </ul> */}

          <section className="modal-window-bottom">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />

            {heart}

            <i className="far fa-comment" />
            <i className="fa fa-upload" aria-hidden="true" />
            <i className="far fa-bookmark" />
            <h4 id="modalLikeCount">{likeCount} like</h4>
            <h6 id="modalDate">NOVEMBER 6</h6>

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input className="addcommentbox" type="text" placeholder="Add a comment..." 
                  onChange={e => this.setState(
                    { body: e.target.value }
                  )}/>
            </form>

          </section>
        </aside>
        {/* </div> */}
      </div>;
  }
}

export default withRouter(modalImageWindowContainer);
