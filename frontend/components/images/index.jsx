import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar'


class IndexContainer extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages()
  }

  render(){
    return(
      <div id="images-index">
        <Route exact path='/index' component={NavBarContainer} />
        <div className="news-feed">
          <ul>
            <li>
              {this.props.images.map(image => (
              <img className="image-post" src = {image.photo_url}/>
            ))}
            </li>
          </ul>
        </div>
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

// {this.props.images.map(image =>{
//   return <img src ="image"/>
// })}
