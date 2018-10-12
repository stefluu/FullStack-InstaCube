import React from 'react';
import { withRouter } from 'react-router-dom';

class Show extends React.Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <h2> This is the user show page </h2>
        <h2> {this.props.currentUser.username} </h2>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

        <i class="fas fa-circle-notch" onClick={() => this.props.toggleModal()}></i>
      </div>
    )
  }
}

export default withRouter(Show);
