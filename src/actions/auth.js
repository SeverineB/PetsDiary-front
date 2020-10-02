// ACTION TYPES

export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER_USER = 'REGISTER_USER';
export const CHECK = 'CHECK';
export const ERROR_LOGIN = 'ERROR_LOGIN';

// ACTION CREATOR

export const toggleLogin = () => ({
  type: TOGGLE_LOGIN,
});

export const registerUser = () => ({
  type: REGISTER_USER,
});

export const check = () => ({
  type: CHECK,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const errorLogin = () => ({
  type: ERROR_LOGIN,
});
