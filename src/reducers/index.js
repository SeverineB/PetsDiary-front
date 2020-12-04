import { combineReducers } from 'redux';
import pets from './pets';
import petDetails from './pet.details';
import users from './users';
import auth from './auth';

export default combineReducers({
  pets,
  petDetails,
  users,
  auth,
});
