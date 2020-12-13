/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { StrictMode } from 'react';
import {
    saveUser,
    REGISTER,
    registerSuccess,
    registerFailed,
    finishLoading,
    LOGIN,
    loginSuccess,
    loginFailed,
    CHECK,
    LOGOUT,
    userConnected,
} from '../actions';

import api from '../services/api';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
        const state = store.getState();
        const {
            email,
            password,
            username,
        } = state.register;
        api.post('user/register', {
            email,
            password,
            username,
        })
            .then((response) => {
            console.log('Middleware USERS response', response.data);
            store.dispatch(saveUser({ ...response.data }));
            store.dispatch(registerSuccess())
            })
            .catch((error) => {
            console.error('Il y a une erreur', error.message);
            store.dispatch(registerFailed(error.response.data.message));
            })
            .finally(() => {
                store.dispatch(finishLoading());
            });
            next(action);
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
                localStorage.setItem('id', response.data.session._id);
                store.dispatch(saveUser({ ...response.data }));
                store.dispatch(loginSuccess());
            })
            .catch((error) => {
                console.log('Mais noooon c\'est pas bon !', error.message);
                store.dispatch(loginFailed(error.response.data.message));
            })
            .finally(() => {
                store.dispatch(finishLoading());
            })
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
          console.log('je suis bien connecté');
          console.log('response dans check front ', response);
          /* store.dispatch(saveUser(response.data)); */
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

export default auth;
