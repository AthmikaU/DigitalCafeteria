// src/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  withCredentials: true,
});

export default instance;
