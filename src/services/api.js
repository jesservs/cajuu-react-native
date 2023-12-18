import axios from 'axios';

const api = axios.create({
    baseURL: 'https://new.cajuu.app/api/',
});

export default api;
