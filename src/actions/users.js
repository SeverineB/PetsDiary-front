// ACTION TYPES

export const GET_USERS = 'GET_USERS';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_USERS = 'SAVE_USERS';
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';


// ACTION CREATOR

export const getUsers = () => ({
  type: GET_USERS,
});

export const saveUser = ({
  isLogged,
  session,
}) => ({
  type: SAVE_USER,
  isLogged,
  // eslint-disable-next-line no-underscore-dangle
  sessionId: session._id,
  sessionUsername: session.username,
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
