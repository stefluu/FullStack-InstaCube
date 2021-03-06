
import React from 'react';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session';


class ModalWindow extends React.Component {

  constructor(props){
    super(props);
    // this.state = {
    //   modal: this.props.modal,
    //   logout: () => dispatch(logout().bind(this.state))
    // }
    // console.log(this.props);
  }
  // componentDidMount(){
  //   this.setState = {
  //     modal: this.props.modal,
  //     logout: () => dispatch(logout().bind(this.state))
  //   }
  // }

  render(){
    // console.log(this.props);
    return(
      <div className="modal-window">
        <li>Change Password</li>
        <li>Authorized Apps</li>
        <li>Notifications</li>
        <li>Privacy and Security</li>
        <li onClick={() => this.props.logout()}>Log Out</li>
        <li id="last-in-modal">Cancel</li>
      </div>
    )
  };
};

export default withRouter(ModalWindow);
