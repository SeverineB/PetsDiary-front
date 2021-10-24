import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/' : 'http://pets-diary-server.severinebianchi.com/api/';
console.log('process node env', process.env.NODE_ENV)
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
