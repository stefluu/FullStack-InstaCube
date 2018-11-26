
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchResult from './search_result';

const mstp = (state, ownProps) => {
    return{
        user: ownProps.user
    };
};

export default withRouter(connect(mstp, null)(SearchResult));