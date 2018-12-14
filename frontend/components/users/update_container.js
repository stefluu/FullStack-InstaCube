import { connect } from "react-redux";
import Update from './update';


const mstp = (state) => {
    return{
        currentUser: state.currentUser
    };
};

export default connect(mstp, null)(Update);