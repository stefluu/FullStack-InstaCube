import * as APIUtil from '../util/followings_api_util';

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const FETCH_CURRENT_USER_FOLLOWS = "FETCH_CURRENT_USER_FOLLOWS";

export const follow = (following) => {
    return dispatch => {
        return APIUtil.follow(following).then(following => {
            return dispatch(followUser(following));
        });
    };
};

export const unfollow = (followingId) => {
    return dispatch => {
        return APIUtil.unfollow(followingId).then(following => {
            return dispatch(unfollowUser(following));
        });
    };
};

export const fetchCurrentUserFollows = (currentUserId) => {
    return dispatch => {
        return APIUtil.fetchCurrentUserFollows(currentUserId).then(followings => {
            return dispatch(fetchFollows(followings));
        });
    };
};



const followUser = (following) => {
    return{
        type: FOLLOW,
        following
    };
};

const unfollowUser = (following) => {
    return{
        type: UNFOLLOW,
        following
    };
};

const fetchFollows = (followings) => {
    return{
        type: FETCH_CURRENT_USER_FOLLOWS,
        followings
    };
};

