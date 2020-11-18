import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const apiClient = () => {
    return axios.create({
        baseURL: baseURL
    });
}

export default apiClient;
