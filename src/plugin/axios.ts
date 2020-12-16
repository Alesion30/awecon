import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const apiClient = () => {
  return axios.create({
    baseURL: baseURL,
    timeout: 10000,
  });
};

export default apiClient;
