import * as APIUtil from '../util/comments_api_util';


export const COMMENT = 'COMMENT';
export const UNCOMMENT = 'UNCOMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const comment = (comment) => {
    return dispatch => {
        return APIUtil.comment(comment).then(comment => {
            return dispatch(commentOnPost(comment));
        });
    };
};

export const uncomment = (comment) => {
    return dispatch => {
        return APIUtil.uncomment(comment).then(comment => {
            return dispatch(uncommentOnPost(comment));
        });
    };
};

export const fetchComments = () => {
    return dispatch => {
        return APIUtil.fetchComments().then(comments => {
            return dispatch(fetchAllComments(comments));
        });
    };
};

const commentOnPost = (comment) => {
    return{
        type: COMMENT,
        comment
    };
};

const uncommentOnPost = (comment) => {
    return{
        type: UNCOMMENT,
        comment
    };
};

const fetchAllComments = (comments) => {
    return{
        type: FETCH_COMMENTS,
        comments
    };
};