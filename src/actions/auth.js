// ACTION TYPES

export const REGISTER = 'REGISTER ';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const CHECK = 'CHECK';
export const USER_CONNECTED = 'USER_CONNECTED';
export const USER_DISCONNECTED = 'USER_DISCONNECTED';
export const ERROR_LOGIN = 'ERROR_LOGIN';

// ACTION CREATOR

export const register = () => ({
    type: REGISTER,
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
});
  
export const registerFailed = (error) => ({
    type: REGISTER_FAILED,
    error,
});

export const check = () => ({
    type: CHECK,
});

export const login = () => ({
    type: LOGIN,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const loginFailed = (error) => ({
    type: LOGIN_FAILED,
    error,
});

export const logout = () => ({
    type: LOGOUT,
});

export const userConnected = (isLogged) => ({
    type: USER_CONNECTED,
    isLogged,
});

export const userDisconnected = () => ({
    type: USER_DISCONNECTED,
});

export const errorLogin = () => ({
    type: ERROR_LOGIN,
});
