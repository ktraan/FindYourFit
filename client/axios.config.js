import axios from 'axios';
require('dotenv').config();

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
});

export default instance;
