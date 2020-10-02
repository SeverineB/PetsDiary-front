import {
  SAVE_USER,
  LOGOUT,
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
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        session: {},
      };
    default:
      return state;
  }
};

export default authReducer;
