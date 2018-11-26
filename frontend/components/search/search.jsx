import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }
    
    componentDidMount(){
        this.props.fetchUsers();
        // console.log("hi")
    };

    handleQuery(e){
        // e.preventDefault();
        this.setState({query: e.target.value})
    }
    

  render() {
    const matchingUsers = [];
    let users = Object.values(this.props.users);
    for(let i = 0; i < users.length; i++){
        let username = users[i].username;
        let fullname = users[i].full_name;
        let query = this.state.query;
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
        }
    }

    return (
    <div>
        <div className="complete-searchbar">
            <input type="text" 
            id="searchbar"
            placeholder="Search" 
            onChange={(e)=> this.handleQuery(e)}/>
            
            <ul className="search-dropdown">
                {matchingUsers.map(user => (
                    <li key={user.id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>

    </div>
    )

    
  }
}

export default withRouter(Search);