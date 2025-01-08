const { Router } = require('express')
const router = Router()

// Test route
router.use('/test', (req, res) => {
  res.end('Test')
})

module.exports = router