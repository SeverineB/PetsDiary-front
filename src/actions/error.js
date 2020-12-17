// ACTION TYPES

export const GET_ERRORS = 'GET_ERRORS';
export const SET_ERRORS = 'SET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_LOG_ERRORS = 'CLEAR_LOG_ERRORS';
export const CLEAR_REG_ERRORS = 'CLEAR_REG_ERRORS';
export const SET_LOG_ERRORS = 'SET_LOG_ERRORS';
export const SET_REG_ERRORS = 'SET_REG_ERRORS';

// ACTION CREATORS

export const getErrors = (error) => ({
  type: GET_ERRORS,
  error,
});

export const setErrors = (id, value) => ({
    type: SET_ERRORS,
    id,
    value
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const clearLogErrors = () => ({
    type: CLEAR_LOG_ERRORS,
});

export const clearRegErrors = () => ({
    type: CLEAR_REG_ERRORS,
});

export const setLogErrors = (id, value) => ({
    type: SET_LOG_ERRORS,
    id,
    value,
});

export const setRegErrors = (id, value) => ({
    type: SET_REG_ERRORS,
    id,
    value,
});
