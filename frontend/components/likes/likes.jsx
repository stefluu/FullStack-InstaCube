import React from 'react';
import { withRouter } from 'react-router-dom'

class Likes extends React.Component{

  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <h4 className="likes">_ likes</h4>
      </div>
    )
  }
};

export default withRouter(Likes)
