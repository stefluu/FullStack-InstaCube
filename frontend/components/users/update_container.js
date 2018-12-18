import { connect } from "react-redux";
import Update from './update';
import { updateUser, checkLogin } from '../../actions/users';
import { withRouter } from "react-router-dom";
import { login } from '../../actions/session';



// const mstp = (state) => {
//     return{
//         currentUser: state.currentUser
//     };
// };

const mdtp = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        checkLogin: (user) => dispatch(checkLogin(user)),
        login: (user) => dispatch(login(user))
    };
};


export default withRouter(connect(null, mdtp)(Update));