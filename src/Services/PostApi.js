import axios from 'axios';

const http = axios.create({
  baseURL: 'https://threshtalk.herokuapp.com',
});

export default http;
