import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar'

class IndexContainer extends React.Component{
  render(){
    return(
      <div id="images-index">

      <Route exact path='/index' component={NavBarContainer} />

      </div>
    )
  }
}

export default withRouter(IndexContainer);

// {this.props.images.map( image => {
//   console.log(image);
// })}

//
// <ul>
//   {[1, 2, 3, 4].map(num => {
//     console.log(num);
//   })}
//
// </ul>
