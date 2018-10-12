import React from 'react';
import { Route, withRouter } from 'react-router-dom';


class IndexContainer extends React.Component{
  render(){
    return(
      <div id="images-index">
      <h1>this is the index page!</h1>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

      <i className="far fa-user"></i>
      </div>
    )
  }
}

export default withRouter(IndexContainer);
