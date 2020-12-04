import {
  GET_USERS,
  REGISTER_USER,
  CHANGE_USER_FIELD,
  SAVE_USERS,
} from '../actions';

const initialState = {
  users: [],
  currentUser: {},
  email: '',
  password: '',
  username: '',
  loading: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
      };
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      };
    case REGISTER_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
