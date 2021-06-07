import axios from 'axios';

const api = axios.create({
  baseURL: 'http://pets-diary-server.severinebianchi.com/api/',
  /* baseURL: 'http://localhost:8000/api/', */
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
