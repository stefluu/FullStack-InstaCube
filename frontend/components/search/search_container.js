import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUsers } from "../../actions/users";
import Search from "./search";

const mstp = (state) => {
    return{
        users: state.entities.users
    };
};

const mdtp = (dispatch) => {
    return{
        fetchUsers: () => dispatch(fetchUsers())
    };
};

export default withRouter(connect(mstp, mdtp)(Search))
