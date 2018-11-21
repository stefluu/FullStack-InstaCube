import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalImageContainer from './modal_image_container';

class modalImageWindowContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    if (!currentUser) return null;


    // let currentUserLikes;
    // if (!this.props.likes){
    //   currentUserLikes = {};
    // } else {
    //   currentUserLikes = Object.values(this.props.likes);
    // }
    // // let currentUserLikes = Object.values(this.props.likes);
    // let currentUserLikesImages = []
    // for(let i=0; i < currentUserLikes.length; i++){
    //   currentUserLikesImages.push(currentUserLikes[i].img_id)
    // }
    // // console.log(this.props)
    // let currentLike;
    // if (currentUserLikesImages.includes(this.props.imageId)){
    //   currentLike = currentUserLikes[currentUserLikesImages.indexOf(this.props.imageId)]
    // }

    // let heart = (currentUserLikesImages.includes(this.props.imageId)) ?
    //   (<i
    //   className="fas fa-heart" id="redHeart"
    //   onClick={() => this.props.unlikeImage(currentLike.id)}></i>
    // ) : (
    //   (
    //     <i
    //   className="far fa-heart"
    //   onClick={() => this.props.likeImage({img_id: this.props.imageId, user_id: this.props.currentUser.id})}></i>
    // ));

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
    // console.log(currentLike)
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


            <ul>
              <li><span>hey_itsStef</span>  nice!</li>
              <li><span>its_aUser</span>  this is cute!</li>
            </ul>

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
