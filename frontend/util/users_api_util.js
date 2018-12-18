
export const fetchUsers = () => {
  return $.ajax({
    url: 'api/users',
    method: 'GET'
  });
};

export const updateUser = (user) => {
  debugger
  return $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  });
};