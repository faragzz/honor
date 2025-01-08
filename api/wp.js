import axios from 'axios'
const FormData = require('form-data')
// import  { MasterKeys } from '../config.js';
// const appEnv = process.env.NODE_ENV || 'development';

const defaults = {
  posts: '/wp-json/wp/v2/posts',
  pages: '/wp-json/wp/v2/pages',
  categories: '/wp-json/wp/v2/categories',
  products: '/wp-json/wp/v2/product',
  settings: '/wp-json/nuxt/v1/settings',
  menu: '/wp-json/nuxt/v1/menu',
  leftSidebar: '/wp-json/nuxt/v1/left_sidebar',
  footerSidebar: '/wp-json/nuxt/v1/footer_sidebar',
}

export class Wp {
  constructor() {
    this.options = { ...defaults }
  }

  settings(name) {
    // eslint-disable-next-line no-prototype-builtins
    if (this.options.hasOwnProperty(name)) {
      return this.options[name]
    }

    return false
  }

  async ajax(data) {
    try {
      const formData = new FormData()

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })

      const headerData = formData.getHeaders()
      headerData.Accept = 'application/json'

      const response = await axios.post(this.settings('ajax_url'), formData, {
        withCredentials: true,
        headers: headerData,
      })

      return {
        status: true,
        response: response.data,
      }
    } catch (err) {
      console.log('err', err.response)
      return {
        status: false,
        response: err.response ? err.response.data : false,
      }
    }
  }

  async rest(url, params = {}) {
    try {
      const response = await axios.get(this.settings('url') + url, {
        params: {
          ...params,
        },
      })

      return {
        status: true,
        headers: response.headers,
        response: response.data,
      }
    } catch (err) {
      return {
        status: false,
        response: err.response.data,
      }
    }
  }
}

// export default client;
