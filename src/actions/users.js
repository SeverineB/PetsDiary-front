// ACTION TYPES

export const GET_USERS = 'GET_USERS';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_USERS = 'SAVE_USERS';

// ACTION CREATOR

export const getUsers = () => ({
    type: GET_USERS,
});

export const saveUser = ({ isLogged, session }) => ({
    type: SAVE_USER,
    isLogged,
    sessionId: session._id,
    sessionUsername: session.username,
});

export const saveUsers = (users) => ({
    type: SAVE_USERS,
    users,
});

