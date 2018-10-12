import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import { AuthRoute } from '../../util/route_util';


class Splash extends React.Component{
  render(){
    return(
      <div>
        <div id="splash">
          <AuthRoute exact path="/" component={LoginContainer} />
          <img id="phone-pic" src="https://images.indianexpress.com/2016/07/instagram-759.jpg" />

          <div id="get-connected">
            <h4>Get connected.</h4>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>

            <a href="https://github.com/stefluu"><i id="github-splash" class="fab fa-github"></i></a>

            <a href="https://www.linkedin.com/in/stefanieluu/"><i id="linkedin-splash" class="fab fa-linkedin"></i></a>
          </div>

          <footer id="footer">
            <ul id="footer-list">
              <li>ABOUT US</li>
              <li>SUPPORT</li>
              <li>PRESS</li>
              <li>API</li>
              <li>JOBS</li>
              <li>PRIVACY</li>
              <li>TERMS</li>
              <li>DIRECTORY</li>
              <li>PROFILES</li>
              <li>HASHTAGS</li>
              <li>LANGUAGE</li>
              <li className="ig-copymark">© 2018 INSTACUBE</li>
            </ul>
          </footer>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);
