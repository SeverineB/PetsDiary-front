import {
  SAVE_USER,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FINISH_LOADING,
  CHECK,
  LOGOUT,
  USER_CONNECTED,
  USER_DISCONNECTED,
} from '../actions';

const initialState = {
  openLogin: false,
  isLogged: false,
  loading: false,
  session: {},
  isLoading: false,
  isFailed: false,
  isDisconnected: false,
  error: {},
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
        return {
            ...state,
            isLogged: action.isLogged,
            session: {
            ...state.session,
            id: action.sessionId,
            username: action.sessionUsername,
            },
      };
    case LOGIN:
        return {
            ...state,
            isLoading: true,
            isLogged: true,
      };
    case LOGIN_SUCCESS:
        return {
            ...state,
            isLogged: true,
            isLoading: true,
        };
    case LOGIN_FAILED:
        return {
            ...state,
            error: action.error,
            isLogged: false,
            isFailed: true,
            isLoading: true,
        };
    case FINISH_LOADING:
        return {
            ...state,
            isLoading: false,
        };
    case CHECK:
        return {
            ...state,
            isLogged: true,
      };
    case LOGOUT:
        return {
            ...state,
            isLogged: false,
            isLoading: true,
            session: {},
      };
    case USER_CONNECTED:
        return {
            ...state,
            isLogged: action.isLogged,
        };
    case USER_DISCONNECTED:
        return {
            ...state,
            isLogged: false,
        };
    default:
      return state;
  }
};

export default authReducer;
