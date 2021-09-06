import axios from 'axios';
import env from '../config/environment';

const api = axios.create({
  baseURL: env.server.baseURL,
});

export default api;
