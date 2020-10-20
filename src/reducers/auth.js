import {
  SAVE_USER,
  LOGIN,
  REGISTER,
  LOGOUT,
  USER_CONNECTED,
  TOGGLE_SHOW_LOGIN,
  TOGGLE_SHOW_REGISTER,
} from '../actions';

const initialState = {
  openLogin: false,
  isLogged: false,
  session: {},
  showLogin: false,
  showRegister: false,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SHOW_LOGIN:
      return {
        ...state,
        showLogin: !state.showLogin,
      };
    case TOGGLE_SHOW_REGISTER:
      return {
        ...state,
        showRegister: !state.showRegister,
      };
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
        loading: true,
        isLogged: true,
      };
    case REGISTER:
      return {
        ...state,
        isLogged: true,
        loading: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        session: {},
      };
    case USER_CONNECTED:
      return {
        ...state,
        isLogged: action.isLogged,
      };
    default:
      return state;
  }
};

export default authReducer;
