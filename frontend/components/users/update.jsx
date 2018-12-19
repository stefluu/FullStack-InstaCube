

import React from 'react';
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar";
import { merge } from "lodash";


class Update extends React.Component {
  constructor(props){
    super(props);
    // this.state = Object.values(currentUser)[0];
    this.state = merge(
      {}, 
      Object.values(currentUser)[0], 
      {oldPassword: "", newPassword: "", confirmPassword: ""}
    );
  };

  handleUpdate(type){
    return (e) => {
      // e.preventDefault();
      this.setState({[type]: e.target.value})
    };
  };

  updatePassword(type){
    return (e) => {
      this.setState({[type]: e.target.value})
      // let updatedVar = {variable};
      // updatedVar = e.target.value;
      // console.log(updatedVar);
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(this.state);
    console.log(this.state)
  }

  handlePasswordChange(e){
    // e.preventDefault();
    // let userCheck = merge(
    //   {}, 
    //   Object.values(currentUser)[0], 
    //   {password: this.state.oldPassword}
    // );
    debugger
    let userCheck = {
      username: Object.values(currentUser)[0].username, 
      password: this.state.oldPassword
    }
    // if(this.props.checkLogin(userCheck)){
    //   console.log("hi")
    // }
    if(this.state.newPassword.length >= 6){
      if(this.state.newPassword === this.state.confirmPassword){
        this.props.login(userCheck).then(() => {
          this.props.updateUser(
            {username: Object.values(currentUser)[0].username, 
             password: this.state.newPassword})
        });
      }
    }
  };
  
  render() {
    return <div className="entireUpdatePage">
        <NavBarContainer />
        <div className="updateCenterBox">
          <aside className="updateSidebar">
            <ul>
              <li id="updateVerticalLine" />
              <li>Edit Profile</li>

              {/* <li>
              Change Password
            </li> */}
            </ul>
          </aside>
          <form className="updateForm">
            <div>
              <ul className="updateInputFields">
                <li id="updateLabels">
                  <label>Name</label>
                  <label>Username</label>
                  <label>Bio</label>
                  <label>Email</label>

                </li>
                <li>
                    <input type="text" value={this.state.display_name} onChange={this.handleUpdate("display_name")} />

   
                    <input type="text" value={this.state.username} onChange={this.handleUpdate("username")} />

                    <textarea id="updateBioBox" type="text" value={this.state.bio} onChange={this.handleUpdate("bio")} />

                    <input type="text" value={this.state.email} onChange={this.handleUpdate("email")} />
                </li>

              </ul>
              <button onClick={this.handleSubmit.bind(this)}>
                Submit
              </button>

            </div>

            <div>
              <ul id="updateInputFields2">
                <label>Old Password</label>

                <input type="password" onChange={this.updatePassword("oldPassword")} />

                <label>New Password</label>
                <input type="password" onChange={this.updatePassword("newPassword")} />

                <label>Confirm Password</label>
                <input type="password" onChange={this.updatePassword("confirmPassword")} />

                <button onClick={this.handlePasswordChange.bind(this)}>
                  Change Password
                </button>
              </ul>
            </div>
          </form>
        </div>
      </div>;
  }
}


export default Update;


