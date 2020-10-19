/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import {
  getUsers,
  saveUsers,
  saveUser,
  REGISTER_USER,
  LOGIN,
  CHECK,
  LOGOUT,
} from '../actions';

import api from '../services/api';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_USER: {
      const state = store.getState();
      const {
        email,
        password,
        username,
      } = state.users;
      api.post('user/register', {
        email,
        password,
        username,
      })
        .then((response) => {
          console.log('Middleware USERS response', response.data);
          store.dispatch(saveUser({ ...response.data }));
        })
        .catch((error) => {
          console.error('Il y a une erreur', error.message);
        });
      break;
    }

    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.users;
      api.post('user/login', {
        email,
        password,
      },
      {
        withCredentials: true,
      })
        .then((response) => {
          console.log('dans login token vaut ', response.data.token);
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
      api.get('user/logout', {})
        .then((response) => {
        })
        .catch((error) => {
          console.log('Mais noooon c\'est pas bon !', error.message);
        });
      break;
    }

    case CHECK: {
      const state = store.getState();

      api.post('user/isLogged',
        {
          withCredentials: true,
        })
        .then((response) => {
          console.log('dans middleware check response data vaut ', response.data);
          store.dispatch(saveUser(response.data));
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
