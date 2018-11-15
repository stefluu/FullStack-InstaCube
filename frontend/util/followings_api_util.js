
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

export const fetchCurrentUserFollows = (currentUserId) => {
    return $.ajax({
        url: `api/users/${currentUserId}/followings`,
        method: 'GET',
        data: { followings }
    });
};