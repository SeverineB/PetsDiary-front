import {
    GET_ERRORS,
    SET_ERRORS,
    CLEAR_ERRORS,
    CLEAR_LOG_ERRORS,
    CLEAR_REG_ERRORS,
    SET_LOG_ERRORS,
    SET_REG_ERRORS,
  } from '../actions';
  
  const initialState = {
    logErrors: {},
    regErrors: {},
    error: {},
  };
  
  const error = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                error: action.error,
            };
        case SET_ERRORS:
            return {
            ...state,
                error: {
                    ...state.error,
                    [action.id]: action.value,
                },
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: {},
            };
        case CLEAR_LOG_ERRORS:
            return {
                ...state,
                logErrors: {},
            };
        case CLEAR_REG_ERRORS:
            return {
                ...state,
                regErrors: {},
            };
        case SET_LOG_ERRORS:
            return {
            ...state,
                logErrors: {
                    ...state.logErrors,
                    [action.id]: action.value,
                },
            };
        case SET_REG_ERRORS:
            return {
            ...state,
                regErrors: {
                    ...state.regErrors,
                    [action.id]: action.value,
                },
            };
      default:
        return state;
    }
  };
  
  export default error;
  