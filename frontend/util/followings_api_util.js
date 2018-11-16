
export const follow = (following) => {
    return $.ajax({
        url: 'api/followings',
        method: 'POST',
        data: { following }
    });
};

export const unfollow = (followingId) => {
    return $.ajax({
        url: `api/followings/${followingId}`,
        method: 'DELETE',
        data: { followingId }
    });
};

export const fetchFollows = () => {
    return $.ajax({
        url: 'api/followings',
        method: 'GET',
        // data: { currentUserId }
    });
};