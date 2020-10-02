/* eslint-disable no-console */
import axios from 'axios';

import {
  GET_USERS,
  saveUsers,
} from '../actions';

const serverURL = 'http://localhost:3000/api/users/';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USERS: {
      console.log('je lance la requête pour récupérer les users');
      axios.get(`${serverURL}`)
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
