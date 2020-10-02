/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios from 'axios';

import {
  getUsers,
  saveUsers,
  saveUser,
  REGISTER_USER,
  LOGIN,
  CHECK,
  LOGOUT,
} from '../actions';

const serverURL = 'http://localhost:3000/api/users/';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER: {
      const state = store.getState();
      const {
        email,
        password,
        username,
      } = state.users;
      axios.post(`${serverURL}register`, {
        email,
        password,
        username,
      })
        .then((response) => {
          console.log('Middleware USERS response', response.data);
          store.dispatch(saveUser({ ...response.data }));
        })
        .catch((error) => {
          console.error('une putain de fuck d\'erreur est survenue', error);
        });
      break;
    }
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.users;
      axios.post(`${serverURL}login`, {
        email,
        password,
      })
        .then((response) => {
          console.log('dans login token vaut ', response.data.token);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('id', response.data.session._id);
          store.dispatch(saveUser({ ...response.data }));
          store.dispatch(getUsers());
        })
        .catch((error) => {
          console.log('Mais noooon c\'est pas bon !', error.message);
        });
      break;
    }
    case LOGOUT: {
      const state = store.getState();
      axios.post(`${serverURL}logout`, {})
        .then((response) => {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
        })
        .catch((error) => {
          console.log('Mais noooon c\'est pas bon !', error.message);
        });
      break;
    }
    case CHECK: {
      const state = store.getState();
      const { id } = state.auth.session;

      const idToken = typeof id === 'undefined' ? localStorage.getItem('id') : id;

      axios.post(`${serverURL}isLogged`, {
        token: localStorage.getItem('token'),
        id: idToken,
      })
        .then((response) => {
          console.log('dans middleware check response data vaut ', response.data);
          store.dispatch(saveUser(response.data));
          localStorage.setItem('id', response?.data.session?._id);
        })
        .catch((error) => {
          console.log('error', error.message);
        });
      break;
    }
    default:
      next(action);
  }
};

export default users;
