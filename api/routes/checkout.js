// eslint-disable-next-line import/no-named-default
import { WooCommerce, WooCommerceSubscription } from '../woo'
import client from '../client'

const { Router } = require('express')
const router = Router()

// Create Stripe Payment
router.post('/checkout/create-order', async (req, res) => {
	const { order } = req.body
	const body = await WooCommerce.post(`orders`, order)
	
	res.json(body.data)
})

// Send Stripe Token to WooCommerce
router.post('/checkout/update-woo-order', async (req, res) => {
	const { orderId, token } = req.body
	try {
		const body = await client.post(`wc/v2/stripe-payment`, {
			order_id: orderId,
			payment_token: token,
			payment_method: 'stripe'
		})
		res.json(body.data)
	} catch(err) {
		res.json({})
	}
})

// Create Subscription Order
router.post('/checkout/create-subscription', async (req, res) => {
	const { order } = req.body
	try {
		const body = await WooCommerceSubscription.post(`subscription`, order)
		res.json(body.data)
	} catch(err) {
		res.json({})
	}
})

module.exports = router




