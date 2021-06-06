import axios from 'axios';

const api = axios.create({
  baseURL: 'http://pets-diary-server.severinebianchi.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
