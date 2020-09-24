import { combineReducers } from 'redux';
import pets from './pets';
import users from './users';

export default combineReducers({
  pets,
  users,
});
