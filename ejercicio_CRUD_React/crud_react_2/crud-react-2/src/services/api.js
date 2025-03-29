import axios from 'axios';


const API_URL = 'https://api.escuelajs.co/api/v1';

const api = axios.create({
  baseURL: API_URL
});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;