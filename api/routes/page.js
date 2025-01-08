/* eslint-disable camelcase */
import apicache from 'apicache'
import client from '../client'

// import { WooCommerce } from '../woo'
const { Router } = require('express')

const router = Router()


// Test route
router.use('/page/:slug', async (req, res) => {
  const slug = req.params.slug
  const { data } = await client.get(`wp/v2/pages?slug=${slug}`)
  if (data.length > 0) {
    res.json(data[0])
  } else {
    res.sendStatus(404)
  }
})

router.use('/post/:slug', async (req, res) => {
  const slug = req.params.slug
  const { data } = await client.post(`wp/v2/post/all?slug=${slug}`)
  if (data) {
    res.json(data)
  } else {
    res.sendStatus(404)
  }
})

router.use('/Category/:slug', async (req, res) => {
  try {
    const slug = req.params.slug
    const { data } = await client.post(`wp/v2/collections/all?slug=${slug}`)
    if (data.length > 0) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    res.json(err.response.data)
  }
})

router.use('/blogs/:page', async (req, res) => {
  try {
    const page = req.params.page
    const { data } = await client.post(`wp/v2/blogs/all?page=${page}`)
    if (data) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    res.json(err.response.data)
  }
})

router.use('/celebrity/:page', async (req, res) => {
  try {
    const page = req.params.page
    const { data } = await client.post(`wp/v2/celebrity/all?page=${page}`)
    if (data) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    res.json(err.response.data)
  }
})

router.use('/lookbooks', async (req, res) => {
  try {
    const { data } = await client.post(`wp/v2/lookbooks/all`)
    if (data) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    res.json(err.response.data)
  }
})

router.use('/product/:slug', async (req, res) => {
  try {
    const slug = req.params.slug
    const { data } = await client.post(`wp/v2/collection/product?slug=${slug}`)
    if (data) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    console.log('api err is', err)
    res.json(err.response.data)
  }
})

router.use('/campaign/:slug', async (req, res) => {
  try {
    const slug = req.params.slug
    const { data } = await client.get(`wp/v2/campaign?slug=${slug}`)
    // const { data } = await client.post(`wp/v2/collections/all?slug=${slug}`)
    if (data.length > 0) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    res.json(err.response.data)
  }
})

router.use('/subscribe', async (req, res) => {
  try {
    const { email, first_name, last_name } = req.query
    const { data } = await client.post(
      `wp/v2/subscribe/newsletter?email=${email}&first_name=${first_name}&last_name=${last_name}`
    )
    if (data) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    console.log('api err is', err)
    res.json(err.response.data)
  }
})

router.use('/email', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      telephone,
      date_of_event,
      zip_code,
      contact_method,
      message,
      inquiries
    } = req.query
    const { data } = await client.post(
      `wp/v2/email/send?first_name=${first_name}&last_name=${last_name}&email=${email}&telephone=${telephone}&date_of_event=${date_of_event}&zip_code=${zip_code}&contact_method=${contact_method}&message=${message}&inquiries=${inquiries}`
    )
    if (data) {
      res.json(data)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    console.log('api err is', err)
    res.json(err.response.data)
  }
})

router.get('/cache', (req, res, next) => {
  res.json(apicache.clear())
})

module.exports = router
