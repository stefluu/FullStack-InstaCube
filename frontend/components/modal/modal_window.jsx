
import React from 'react';
import { withRouter } from 'react-router-dom';

class ModalWindow extends React.Component {
  render(){
    return(
      <div className="modal-window">
        <li>Change Password</li>
        <li>Authorized Apps</li>
        <li>Notifications</li>
        <li>Privacy and Security</li>
        <li>Log Out</li>
        <li id="last-in-modal">Cancel</li>
      </div>
    )
  };
};

export default withRouter(ModalWindow);
