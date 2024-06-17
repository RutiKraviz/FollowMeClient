// src/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_SERVER_API// 'https://your-api-url.com'; // Replace this with your API base URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL
});

export default axiosInstance;
