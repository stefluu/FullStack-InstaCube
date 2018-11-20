export const comment = (comment, imageId) => {
    return $.ajax({
        url: `api/images/${imageId}/comments`,
        method: 'POST',
        data: { comment, imageId }
    });
};

export const uncomment = (commentId, imageId) => {
    return $.ajax({
        url: `api/images/${imageId}/comments/${commentId}`,
        method: 'DELETE',
        data: { commentId, imageId }
    });
};

export const fetchComments = (imageId) => {
    return $.ajax({
        url: `api/images/${imageId}/comments`,
        method: 'GET',
        data: { imageId }
    });
};