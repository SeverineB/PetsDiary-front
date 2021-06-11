import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/' : 'http://pets-diary-server.severinebianchi.com/api/';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
