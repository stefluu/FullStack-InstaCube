
export const fetchUsers = () => {
  return $.ajax({
    url: 'api/users',
    method: 'GET'
  });
};

export const updateUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    data: { user }
  });
};