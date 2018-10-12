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
