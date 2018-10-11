import React from 'react';
import { Route, withRouter } from 'react-router-dom';


class IndexContainer extends React.Component{
  render(){
    return(
      <div>
      <h1>this is the index page!</h1>
      </div>
    )
  }
}

export default withRouter(IndexContainer);
