/* eslint-disable no-console */
import api from '../services/api';

import {
  GET_USERS,
  saveUsers,
} from '../actions';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS: {
      console.log('je lance la requête pour récupérer les users');
      api.get('/')
        .then((response) => {
          console.log('dans middleware users response vaut ', response);
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
