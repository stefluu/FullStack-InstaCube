import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import LoginContainer from '../session/login_container';
//
//
class navBar extends React.Component{
  render(){
    return(
      <div className="complete_navBar">
        <section className="navBar-left">
          <Link to='/index'><img id="ig-cube" src="https://s3-us-west-1.amazonaws.com/instacube-dev/43880183_544694999309669_656150743744512_n.png"/></Link>

          <div className="verticalLine"></div>

          <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"></link>

          <Link to='/index'><div>
            <div className="instacube-name">
              <img src="https://s3-us-west-1.amazonaws.com/instacube-dev/Screen+Shot+2018-10-15+at+11.09.16+AM.png" />
            </div>
          </div></Link>
          <h2 id="instacube-3"> <sup>3</sup> </h2>

        </section>

        <input type="text" placeholder="Search.." />

        <section className="navBar-right">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

          <i className="far fa-compass"></i>

          <i className="far fa-heart"></i>

          <Link to={`/users/${this.props.currentUserId}`}><i className="far fa-user"></i></Link>
        </section>
      </div>
    )
  };
};

const mstp = (state) => {
  return {
    currentUserId: state.session.currentUserId
  };
};

export default connect(mstp, null)(withRouter(navBar));

//
// <div className="searchBar">
//   <input placeholder="Search" />
//   <i class="fas fa-search"></i>
// </div>
//
