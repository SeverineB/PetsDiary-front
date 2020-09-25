/* eslint-disable no-console */
import axios from 'axios';

import { GET_USERS, saveUsers, REGISTER_USER } from '../actions';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS: {
      const state = store.getState();
      console.log('je lance la requête pour récupérer les users');
      axios.get('http://localhost:3000/api/users/')
        .then((response) => {
          console.log('Middleware USERS response vaut ', response.data);
          store.dispatch(saveUsers(response.data, false));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case REGISTER_USER: {
      const state = store.getState();
      const {
        email,
        password,
        username,
      } = state.users;
      axios.post('http://localhost:3000/api/users/register', {
        email,
        password,
        username,
      })
        .then((response) => {
          console.log('Middleware USERS response', response.data);
          store.dispatch(saveUsers(response.data, false));
        })
        .catch((error) => {
          console.error('une putain de fuck d\'erreur est survenue', error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default users;
