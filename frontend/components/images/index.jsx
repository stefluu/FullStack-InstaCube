import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class IndexContainer extends React.Component{
  render(){
    return(
      <div id="images-index">
      <h1>this is the index page!</h1>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

      <Link to={`/users/${this.props.currentUserId}`}><i className="far fa-user"></i></Link>

    <i class="fab fa-instagram"></i>

      <ul>
        {[1, 2, 3, 4].map(num => {
          console.log(num);
        })}

      </ul>

      </div>
    )
  }
}

export default withRouter(IndexContainer);

// {this.props.images.map( image => {
//   console.log(image);
// })}
