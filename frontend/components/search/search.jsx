import React from "react";
import { withRouter } from "react-router-dom";
import SearchResult from './search_result_container';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }
    
    componentDidMount(){
        this.props.fetchUsers();
    };

    // componentWillMount(){
    //     this.setState({ query: "" });
    // }

    clearQuery(e){
        debugger
        e.preventDefault();
        this.setState({ query: "" });
        this.addHidden();
    }

    handleQuery(e, value){
        console.log(this.state.query)
        e.preventDefault();
        this.setState({query: e.target.value});
        let searchBar = document.getElementById("search-dropdown");
        
        if (e.target.value === "") {
            searchBar.classList.add("hidden");
        } else {
            searchBar.classList.remove("hidden");
        }
    }

    addHidden(e) {
        debugger
        let searchBar = document.getElementById("search-dropdown");
        searchBar.classList.add("hidden");
        this.setState({ query: "" });
    }

  render() {
    const matchingUsers = [];
    let users = Object.values(this.props.users);
    for(let i = 0; i < users.length; i++){
        let username = users[i].username;
        let fullname = users[i].full_name;
        let query = this.state.query;
        // debugger
        if(query !== ""){
            if (username && (username.search(new RegExp(query, "i")) !== -1)){
                // console.log("matching username")
                // console.log(users[i])
                matchingUsers.push(users[i]);
                // console.log("query")
                // console.log(query)
            // } else if ((fullname.search(new RegExp(query, "i") !== -1))){
            //     debugger
            //     console.log("matching fullname");
            //     console.log(query)
            //     console.log(users[i]);
            //     matchingUsers.push(users[i]);
            }
        // } else {
            
        }
    }
    
    return (
    <div>
        <div className="complete-searchbar">
            <input type="text" 
            id="searchbar"
            placeholder="Search"
            value={this.state.query}
            // onClick={(e) => this.clearQuery(e)}
            // onClick={(e) => this.addHidden(e)}
            // onClick={(e)=> console.log(matchingUsers)}
            onChange={(e)=> this.handleQuery(e)}
            />

            <ul id= "search-dropdown"
                className="search-dropdown hidden">
                {matchingUsers.map(user => (
                    <li key={user.id}
                        onClick={(e) => this.addHidden(e)}>
                        <SearchResult user={user} />
                    </li>
                ))}
            </ul>
        </div>

    </div>
    )

    
  }
}

export default withRouter(Search);