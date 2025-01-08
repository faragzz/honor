import axios from 'axios'
import  { MasterKeys } from '../config.js';
const appEnv = process.env.NODE_ENV || 'development';

const CoCart = axios.create({
  baseURL: `${MasterKeys[appEnv].apiEndPoint}/wp-json/cocart`,
  timeout: 4000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default CoCart;