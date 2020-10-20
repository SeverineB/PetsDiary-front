/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import {
  getUsers,
  saveUsers,
  saveUser,
  REGISTER,
  LOGIN,
  CHECK,
  LOGOUT,
  userConnected,
} from '../actions';

import api from '../services/api';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
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
          store.dispatch(userConnected(true));
        })
        .catch((error) => {
          console.log('Mais noooon c\'est pas bon !', error.message);
        });
      break;
    }

    case LOGOUT: {
      api.get('user/logout',
        {
          withCredentials: true,
        })
        .then((response) => {
          store.dispatch(userConnected(false));
        })
        .catch((error) => {
          console.log('Mais noooon c\'est pas bon !', error.message);
        });
      next(action);
      break;
    }

    case CHECK: {
      api.post('user/isLogged', {},
        {
          withCredentials: true,
        })
        .then((response) => {
          console.log('dans middleware check response data vaut ', response.data);
          store.dispatch(saveUser(response.data));
          store.dispatch(userConnected(true));
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
