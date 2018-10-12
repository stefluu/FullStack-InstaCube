
import { connect } from 'react-redux';
import ShowContainer from './show'

const mstp = (state) => {
  return{
    // users: state.entities.users,
    // currentUserId: state.session.currentUserId,
    currentUser: (state.entities.users)[state.session.currentUserId]
  };
};



export default connect(mstp, null)(ShowContainer)
