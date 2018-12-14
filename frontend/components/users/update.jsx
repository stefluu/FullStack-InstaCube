

import React from 'react';
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar";


class Update extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.values(currentUser)[0]
  };

  handleUpdate(type){
    return (e) => {
      // e.preventDefault();
      this.setState({[type]: e.target.value})
    }
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
            <input type="text" value={this.state.username} onChange={this.handleUpdate("username")} />
            <input type="text" value={this.state.full_name} onChange={this.handleUpdate("full_name")} />
            <input type="text" value={this.state.bio} onChange={this.handleUpdate("bio")} />
            <input type="text" value={this.state.email} onChange={this.handleUpdate("email")} />
          </ul>
          </form>
        </div>
      </div>
    );
  }
}


export default withRouter(Update);


