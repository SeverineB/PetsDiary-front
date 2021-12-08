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
            username,
            email,
            password
        } = state.register;
        api.post('user/register', {
            username,
            email,
            password
        })
            .then((response) => {
                if (response.status === 200) {
                    store.dispatch(registerSuccess());
                }
            })
            .catch((error) => {
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
                localStorage.setItem('username', response.data.session.username);
                store.dispatch(saveUser({ ...response.data }));
                store.dispatch(loginSuccess());
            })
            .catch((error) => {
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
            localStorage.removeItem('username');
            store.dispatch(userConnected(false));
        })
        .catch((error) => {
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
          /* store.dispatch(saveUser(response.data)); */
          store.dispatch(userConnected(true));
        })
        .catch((error) => {
          store.dispatch(userConnected(false));
        });
      break;
    }
    default:
      next(action);
  }
};

export default auth;
