import { combineReducers } from 'redux';
import pets from './pets.reducer';
import events from './events.reducer';
import users from './users.reducer';
import auth from './auth.reducer';
import register from './register.reducer';
import error from './error.reducer';

export default combineReducers({
  pets,
  events,
  users,
  auth,
  register,
  error
});
