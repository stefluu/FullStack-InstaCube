import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import LoginContainer from '../session/login_container';


class Splash extends React.Component{
  render(){
    return(
      <div>
        <Route exact path="/" component={LoginContainer} />
        <footer>
          <ul>
            <li>ABOUT US</li>
            <li>SUPPORT</li>
            <li>PRESS</li>
            <li>API</li>
            <li>JOBS</li>
            <li>PRIVACY</li>
            <li>TERMS</li>
            <li>DIRECTORY</li>
            <li>PROFILES</li>
            <li>HASHTAG</li>
            <li>LANGUAGE</li>
          </ul>
          <h4>© 2018 INSTACUBE</h4>
        </footer>
      </div>
    )
  }
}

export default withRouter(Splash);
