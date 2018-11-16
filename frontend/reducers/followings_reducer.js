import { FOLLOW, UNFOLLOW, FETCH_FOLLOWS} from '../actions/followings';
import { merge } from 'lodash';

const followingsReducer = (state = {}, action) => {
    switch (action.type) {
        case FOLLOW:
            return merge({}, state, {[action.following.id]: action.following});
        case UNFOLLOW:
            let newState = merge({}, state);
            delete newState[action.following.id];
            return newState;
        case FETCH_FOLLOWS:
            return merge({}, state, action.followings)
        default:
            return state;
    };
};

export default followingsReducer;