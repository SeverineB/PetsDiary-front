/* eslint-disable no-console */
import api from '../services/api';

import {
  GET_USERS,
  saveUsers,
} from '../actions';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS: {
      api.get('/')
        .then((response) => {
          store.dispatch(saveUsers(response.data, false));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default users;
