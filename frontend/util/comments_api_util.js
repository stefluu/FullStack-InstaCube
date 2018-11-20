export const comment = (comment) => {
    return $.ajax({
        url: 'api/comments',
        method: 'POST',
        data: { comment }
    });
};

export const uncomment = (commentId) => {
    return $.ajax({
        url: `api/comments/${commentId}`,
        method: 'DELETE',
        data: { commentId }
    });
};

export const fetchComments = () => {
    return $.ajax({
        url: 'api/comments',
        method: 'GET',
        // data: { imageId }
    });
};