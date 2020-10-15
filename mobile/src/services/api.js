import axios from 'axios';

const api = axios.create({baseURL: 'http://ctracker.com.br/metronic/api-v2/'});

export default api;
