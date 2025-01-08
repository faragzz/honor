import CoCart from '../cocart'

const { Router } = require('express')
const router = Router()

/**
 * Cart Data
 */
router.get('/cart', async (req, res) => {
  const jwtToken = req.cookies['jwt-token']
	const cocartHash = req.cookies['x-cocart-api']
  const config = jwtToken ? {
	  headers: {
		  Authorization : `Bearer ${jwtToken}`,
	  },
  } : {
		params: {
			cart_key: cocartHash
		}
	}
  try {
		const { data } = await CoCart.get('/v2/cart', config)
  	res.json(data)
  } catch(err) {
		res.json(err.response.data)
  }
})

/**
 * Retrieve Cart Totals
 */
router.get('/cart/totals', async (req, res) => {
	const jwtToken = req.cookies['jwt-token']
  const config = jwtToken ? {
	  headers: {
		  Authorization : `Bearer ${jwtToken}`
	  }
  } : {}
	try {
		const { data } = await CoCart.get('/v2/cart/totals', config)
  	res.json(data)
	} catch(err) {
		res.json(err.response.data)
	}
})

/**
 * Add to Cart
 */
router.post('/cart/add-item/', async (req, res) => {
  const { id } = req.body
  const jwtToken = req.cookies['jwt-token']
	const cocartHash = req.cookies['x-cocart-api']

  const config = jwtToken ? {
		headers: {
	  	Authorization : `Bearer ${jwtToken}`
		},
  } : {
		params: {
			cart_key: cocartHash
		}
	}

  const data = await CoCart.post(`/v2/cart/add-item`, {
		id: String(id),
		quantity: "1"
  }, config)

	if (!cocartHash) {
		const headers = JSON.stringify(data.headers)
		const match = headers.split(',')
		
		for (let i = 0; i < match.length; i++) { 
			const reformatted = JSON.stringify(match[i]).replace(/\\/g, '')
			const quotesRemoval = reformatted.replace(/['"]+/g, '')
			const split = quotesRemoval.split(':')
			if (split[0] === 'x-cocart-api') {
				res.cookie('x-cocart-api', split[1])
			}
		}
	}

  res.json(data.data)
})

/**
 * Update Cart Items
 */
router.post('/cart/update-item/', async (req, res) => {
  try {
		const { quantity, itemKey } = req.body
  	const jwtToken = req.cookies['jwt-token']
		const cocartHash = req.cookies['x-cocart-api']
		const config = jwtToken ? {
			headers: {
				Authorization : `Bearer ${jwtToken}`
			},
			} : {
				params: {
					cart_key: cocartHash
				}
		}

  	const data = await CoCart.post(`/v2/cart/item/${itemKey}`, {
			quantity
  	}, config)
  	res.json(data.data)
  } catch(err) {
	  res.json({})
  }
})

/**
 * Clear Cart
 */
router.post('/cart/clear', async (req, res) => {
	const jwtToken = req.cookies['jwt-token']
	const cocartHash = req.cookies['x-cocart-api']
	const config = jwtToken ? {
		headers: {
			Authorization : `Bearer ${jwtToken}`
		},
		} : {
			params: {
				cart_key: cocartHash
			}
	}
  const { data } = await CoCart.post('/v2/cart/clear', {}, config)
  res.json(data)
})

/**
 * Update Shipping Method
 */
router.post('/cart/update-shipping-method/', async (req, res) => {
  try {
		const { key } = req.body
  	const cocartHash = req.cookies['jwt-token']
  	const data = await CoCart.post(`/v1/shipping-methods`, {
			key
  	}, {
			headers: {
				Authorization : `Bearer ${cocartHash}`
			},	
  	})
  	res.json(data.data)
  } catch(err) {
	  res.json({})
  }
})

/**
 * Cart Login
 */
router.post('/cart/login/', async (req, res) => {
  try {
		const { key } = req.body
  	const cocartHash = req.cookies['jwt-token']
  	const data = await CoCart.post(`/v2/login`, {
			key
  	}, {
			headers: {
				Authorization : `Bearer ${cocartHash}`
			},	
  	})
  	res.json(data.data)
  } catch(err) {
	  res.json({})
  }
})

/**
 * Get Payment Methods
 */
router.get('/cart/payment-methods/', async (req, res) => {
  const cocartHash = req.cookies['jwt-token']
  const data = await CoCart.get(`/v1/payment-methods`, {
		headers: {
	  	Authorization : `Bearer ${cocartHash}`
		},
  })
  res.json(data.data)
})

module.exports = router