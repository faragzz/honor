import JWT from '../jwt'
import { WooCommerce, WooCommerceSubscription } from '../woo'
import client from '../client'
const { Router } = require('express')

const router = Router()

/**
 * Account Login
 */
router.post('/login', async (req, res) => {
	const { email, password } = req.body
	const body = await JWT.post(`/jwt-auth/v1/token`, {
		username: email,
    password
	});
	res.json(body.data)
})

/**
 * Account User Details
 */
router.get('/account', async (req, res) => {
	try {
		const { data } = await client.get(`wp/v2/users/me/`, {})
		res.json(data)
	} catch(err) {
		res.json({})
	}
})

/**
 * Account Get Customer
 */
router.get('/account/get-customer', async (req, res) => {
	const { id } = req.query
	try {
		const body = await WooCommerce.get(`customers/${id}`, {}, {})
		res.json(body.data)
	} catch(err) {
		res.json({})
	}	
})

/**
 * Account Update Customer
 */
router.post('/account/update-customer', async (req, res) => {
	const { data } = req.body
	const cocartHash = req.cookies['jwt-token']
	const body = await WooCommerce.put(`customers/1`, data, {
		headers: {
		  Authorization : `Bearer ${cocartHash}`
	  }
	})
	res.json(body.data)
})

/**
 * Account Orders
 */
router.get('/account/orders', async (req, res) => {
	try {
		const body = await WooCommerce.get(`orders`, {}, {})
		res.json(body.data)
	} catch(err) {
		console.log('err is', err.response.data)
		res.json({})
	}
})

/**
 * Account Subscription Orders
 */
router.get('/account/subscriptions', async (req, res) => {
	const jwtToken = req.cookies['jwt-token']
	try {
		const body = await WooCommerceSubscription.get(`subscriptions`, {}, {
			headers: {
				Authorization : `Bearer ${jwtToken}`
			}
		})
		res.json(body.data)
	} catch(err) {
		res.json({})
	}
	
})

/**
 * Account Order ID
 */
router.post('/account/order', async (req, res) => {
	const { id } = req.body
	const jwtToken = req.cookies['jwt-token']
	try {
		const body = await WooCommerce.get(`orders/${id}`, {}, {
			headers: {
				Authorization : `Bearer ${jwtToken}`
			}
		})
		res.json(body.data)
	} catch(err) {
		res.json({})
	}
})

module.exports = router