import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ctracker.com.br/metronic/api-jornada/',
});

export default api;
