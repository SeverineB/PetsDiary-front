import { combineReducers } from 'redux';
import pets from './pets';
import users from './users';
import auth from './auth';

export default combineReducers({
  pets,
  users,
  auth,
});
