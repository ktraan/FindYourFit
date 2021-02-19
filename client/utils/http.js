import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://find-your-fit.herokuapp.com/'
      : 'http://localhost:3000',
});

export default axiosInstance;
