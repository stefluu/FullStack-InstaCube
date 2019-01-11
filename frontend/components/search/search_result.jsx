
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class SearchResult extends React.Component {
    constructor(props){
        super(props);
    };


    // addHidden(e){
    //   let searchBar = document.getElementById("search-dropdown");
    //   searchBar.classList.add("hidden");
    // }

  render() {
      let user = this.props.user;

    return (
      <div className="searchresult">
         <a href={`/#/users/${user.id}`}
            // onClick={(e) => this.addHidden(e)}
          >
            <p>{user.username}</p>
            <p>{user.display_name}</p>
        </a>
      </div>
    )
  }
}

export default withRouter(SearchResult);
