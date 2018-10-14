import { connect } from 'react-redux';
import IndexContainer from './index'


const mstp = (state) => {
  return {
    currentUserId: this.state.session.currentUserId,
    // images: Object.values(this.state.entites.images)
  };
};

export default connect(mstp, null)(IndexContainer);
