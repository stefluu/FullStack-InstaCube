import { connect } from 'react-redux';
import IndexContainer from './index'


const mstp = (state) => {
  return {
    currentUserId: this.state.session.currentUserId
  };
};

export default connect(mstp, null)(IndexContainer);
