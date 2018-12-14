

import React from 'react';
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar";


class Update extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.values(currentUser)[0];
  };

  handleUpdate(type){
    return (e) => {
      // e.preventDefault();
      this.setState({[type]: e.target.value})
    };
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(this.state);
  }
  
  render() {
    // debugger
    return( 
    <div className="entireUpdatePage">
      <NavBarContainer />
      <div className="updateCenterBox">
        <aside className="updateSidebar">
          <ul>
            <li>
              Edit Profile
            </li>

            <li>
              Change Password
            </li>
          </ul>
        </aside>
          <form className="updateForm">
          <ul className="updateInputFields">
          <label>Name
            <input type="text" value={this.state.display_name} onChange={this.handleUpdate("display_name")} />
          </label>

          <label>Username
            <input type="text" value={this.state.username} onChange={this.handleUpdate("username")} />
          </label>

            <label>Bio
              <input type="text" value={this.state.bio} onChange={this.handleUpdate("bio")} />
            </label>

            <label>Email
              <input type="text" value={this.state.email} onChange={this.handleUpdate("email")} />
            </label>

            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          </ul>

          </form>
        </div>
      </div>
    );
  }
}


export default Update;


