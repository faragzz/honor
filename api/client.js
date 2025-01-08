import axios from 'axios'
import  { MasterKeys } from '../config.js';
const appEnv = process.env.NODE_ENV || 'development';

const client = axios.create({
  baseURL: `${MasterKeys[appEnv].apiEndPoint}/wp-json/`,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default client;