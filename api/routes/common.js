import { Wp } from '../wp'

const { Router } = require('express')
const router = Router()
const $wp = new Wp()

// Fetch By Slug
router.get('/common/:slug', async (req, res) => {
  const slug = req.params.slug
  const { status, response } = await $wp.rest($wp.settings('pages'), { slug })

  if (status) {
    const page = response.length !== 0 ? response[0] : false
    res.json(page)
  }

  return false
})

// Fetch Products
router.get('/allProducts', async (req, res) => {
  const { status, response, headers } = await $wp.rest($wp.settings('products'))

  if (status) {
    const objects = response

    res.json({
      objects,
      totalPosts: parseInt(headers['x-wp-total'], 10),
      totalPages: parseInt(headers['x-wp-totalpages'], 10),
    })
  }

  return false
})

// Get Cart
router.get('/getCart', async (req, res) => {
  const { status, response, headers } = await $wp.ajax({
    action: 'getCartProducts',
  })

  if (status) {
    res.json(response.data)
  }

  return false
})

// Add to cart
router.post('/addToCart', async (req, res) => {
  const { status, response } = await $wp.ajax({
    action: 'addCartProduct',
    id: 76,
    quantity: 1,
  })

  if (status) {
    res.json(response.data.data)
  }
  return false
})

module.exports = router
