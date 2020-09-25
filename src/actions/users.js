// ACTION TYPES

export const GET_USERS = 'GET_USERS';
export const SAVE_USERS = 'SAVE_USERS';
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const REGISTER_USER = 'REGISTER_USER';
export const CONNECT_USER = 'CONNECT_USER';

// ACTION CREATOR

export const getUsers = () => ({
  type: GET_USERS,
});

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  users,
});

export const changeUserField = (value, name) => ({
  type: CHANGE_USER_FIELD,
  value,
  name,
});
