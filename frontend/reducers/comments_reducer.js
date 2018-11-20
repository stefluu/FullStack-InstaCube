import { COMMENT, UNCOMMENT, FETCH_COMMENTS } from '../actions/comments';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMENT:
            return merge({}, state, {[action.comment.id]: action.comment});
        case UNCOMMENT:
            let newState = merge({}, state);
            delete newState[action.comment.id];
            return newState;
        case FETCH_COMMENTS:
            return merge({}, state, action.comments)
        default:
            return state;
    };
};

export default commentsReducer;