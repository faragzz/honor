import  { MasterKeys } from '../config.js';

const WooCommerceAPI = require("@woocommerce/woocommerce-rest-api").default;
const appEnv = process.env.NODE_ENV || 'development';

const WooCommerce = new WooCommerceAPI({
  url: MasterKeys[appEnv].apiEndPoint,
  consumerKey: 'ck_2eea81b158c8f1217dfa70e5d9ef3c0ff8a2a21a',
  consumerSecret: 'cs_728ed58dcf01f3e900cff943ae767e928e2af6b1',
  wpAPI: true,
  version: 'wc/v3',
  queryStringAuth: true,
  axiosConfig: {
    headers: {'Content-Type': 'application/json'},
  }
});

const WooCommerceSubscription = new WooCommerceAPI({
  url: MasterKeys[appEnv].apiEndPoint,
  consumerKey: 'ck_2eea81b158c8f1217dfa70e5d9ef3c0ff8a2a21a',
  consumerSecret: 'cs_728ed58dcf01f3e900cff943ae767e928e2af6b1',
  wpAPI: true,
  version: 'wc/v1',
  queryStringAuth: true,
  axiosConfig: {
    headers: {'Content-Type': 'application/json'},
  }
});

export { WooCommerce, WooCommerceSubscription };