import React from 'react';
// import { Route, withRouter } from 'react-router-dom';
// import LoginContainer from '../session/login_container';
//
//
class navBar extends React.Component{
  render(){
    return(
      <div id="complete_navBar">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

        <i class="fab fa-instagram"></i>

        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"></link>

        <h2 id="instacube-name"> Insta<sup>3</sup> </h2>

        <input type="text" placeholder="Search.."/>

        <i class="far fa-compass"></i>

        <i class="far fa-heart"></i>

        <Link to={`/users/${this.props.currentUserId}`}><i className="far fa-user"></i></Link>
      </div>
    )
  };
};

export default withRouter(navBar);
