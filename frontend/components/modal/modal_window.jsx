
import React from 'react';

class ModalWindow extends React.Component {
  render(){
    return(
      <div>
        <li>Change Password</li>
        <li>Authorized Apps</li>
        <li>Notifications</li>
        <li>Privacy and Security</li>
        <li>Log Out</li>
        <li>Cancel</li>
      </div>
    )
  };
};

export default withRouter(ModalWindow);
