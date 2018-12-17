

import React from 'react';
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar";
import { merge } from "lodash";


class Update extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.values(currentUser)[0];
    // this.state = merge(
    //   {}, 
    //   Object.values(currentUser)[0], 
    //   {oldPassword: "", newPassword: "", confirmPassword: ""}
    // );
  };

  handleUpdate(type){
    return (e) => {
      // e.preventDefault();
      this.setState({[type]: e.target.value})
    };
  };

  handlePasswordChange(type){
    return (e) => {
      this.setState({[type]: e.target.value})
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(this.state);
    console.log(this.state)
  }

  handleSubmitPasswordChange(e){
    e.preventDefault();
   
  };
  
  render() {
    // debugger
    return <div className="entireUpdatePage">
        <NavBarContainer />
        <div className="updateCenterBox">
          <aside className="updateSidebar">
            <ul>
              <li>Edit Profile</li>

              {/* <li>
              Change Password
            </li> */}
            </ul>
          </aside>
          <form className="updateForm">
            <div>
              <ul className="updateInputFields">
                <label>
                  Name  
                  <input type="text" id="firstUpdateInput" value={this.state.display_name} onChange={this.handleUpdate("display_name")} />
                </label>

                <label>
                  Username  
                  <input type="text" value={this.state.username} onChange={this.handleUpdate("username")} />
                </label>

                <label>
                  Bio 
                  <input type="text" value={this.state.bio} onChange={this.handleUpdate("bio")} />
                </label>

                <label>
                  Email 
                  <input type="text" value={this.state.email} onChange={this.handleUpdate("email")} />
                </label>

                <button onClick={this.handleSubmit.bind(this)}>
                  Submit
                </button>
              </ul>
            </div>

            <div>
              <ul className="updateInputFields">
                <label>Old Password</label>

                <input type="password" onChange={this.handlePasswordChange("oldPassword")} />

                <label>New Password</label>
                  <input type="password" onChange={this.handlePasswordChange("newPassword")} />

                <label>Confirm Password</label>
                  <input type="password" onChange={this.handlePasswordChange("confirmPassword")} />

                <button
                  onClick={this.handleSubmitPasswordChange.bind(this)}
                >
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


