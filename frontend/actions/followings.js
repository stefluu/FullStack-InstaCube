import * as APIUtil from '../util/followings_api_util';

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const FETCH_FOLLOWS = "FETCH_FOLLOWS";

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

export const fetchFollows = () => {
    return dispatch => {
        return APIUtil.fetchFollows().then(followings => {
            return dispatch(fetchAllFollows(followings));
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

const fetchAllFollows = (followings) => {
    return{
        type: FETCH_FOLLOWS,
        followings
    };
};

