import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalImageContainer from './modal_image_container';

class modalImageWindow extends React.Component {
  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   this.props.fetchLikes()
  // }
  render(){

    // if (!currentUser) return null;
    //
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
    // console.log(this.props)
    // let currentLike;
    // if (currentUserLikesImages.includes(this.props.imageId)){
    //   currentLike = currentUserLikes[currentUserLikesImages.indexOf(this.props.imageId)]
    // }
    //
    // let heart = (currentUserLikesImages.includes(this.props.imageId)) ?
    //   (<i
    //   className="fas fa-heart" id="redHeart"
    //   onClick={() => this.props.unlikeImage(currentLike.id)}></i>
    // ) : (
    //   (
    //     <i
    //   className="far fa-heart"
    //   onClick={() => this.props.likeImage({img_id: imageId})}></i>
    // ));

    return(
      <div className="entire-modal-image-window"
            onClick={e => e.stopPropagation()}>
        <div className="modal-image-everything">
          <ModalImageContainer />;


          <aside className="modal-image-window-aside">

            
            <ul>
              <li><span>hey_itsStef</span>  nice!</li>
              <li><span>its_aUser</span>  this is cute!</li>
            </ul>

            <section className="modal-window-bottom">
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

                <i
                   className="far fa-heart"
                   ></i>

                <i className="far fa-comment"></i>
                <i className="far fa-bookmark"></i>
                <h4>1 like</h4>
                <h4>NOVEMBER 6</h4>
                <input className="addcommentbox" type="text" placeholder="Add a comment..."></input>
            </section>
          </aside>
      </div>

      </div>
    )
  }
}

export default withRouter(modalImageWindow);
