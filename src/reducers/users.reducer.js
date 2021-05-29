import {
  GET_USERS,
  CHANGE_USER_FIELD,
  SAVE_USERS,
  LOGOUT
} from '../actions'

const initialState = {
  users: [],
  currentUser: {},
  username: '',
  email: '',
  password: '',
}

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
      }
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      }
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      }
    case LOGOUT:
        return {
        ...state,
        email: '',
        password: '',
        username: '',
    }
    default:
      return state
  }
}

export default users
