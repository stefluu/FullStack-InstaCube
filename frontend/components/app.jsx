import React from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import Login from './session/login_container'

const App = () => (
  <div>
    <h1>This is being rendered from app.jsx</h1>
    <Route path="/" component={Login} />
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
);

export default App;
