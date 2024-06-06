import axios from 'axios';

const api = axios.create({
  baseURL: process.env.MONGODB_URI ?? '',
});

export { api };
