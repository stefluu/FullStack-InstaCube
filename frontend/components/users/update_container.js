import { connect } from "react-redux";
import Update from './update';
import { updateUser } from '../../actions/users';
import { withRouter } from "react-router-dom";



// const mstp = (state) => {
//     return{
//         currentUser: state.currentUser
//     };
// };

const mdtp = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    };
};


export default withRouter(connect(null, mdtp)(Update));