import React from 'react';
import { withRouter } from 'react-router-dom';
import LikedHeart from './liked_heart';
import UnlikedHeart from './unliked_heart';

class Likes extends React.Component{

  constructor(props){
    super(props);
    // this.state = {
    //   bool: false
    // }
  };

  // handleClick(bool){
  //   return (e) => {
  //     this.setState({[type]: !(e.target.value)})
  //   }
  // }


  render(){

    let heart;
    if (bool) {
      component = <LikedHeart />
    } else {
      component = <UnlikedHeart />
    }

    return(
      <div>
        <i className="far fa-heart"
          onClick={(this.handleClick(bool).bind(this))}
          ></i>
      </div>
    )
  }
};

export default withRouter(Likes)
