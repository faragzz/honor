const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(cors());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// Require API routes
// const users = require('./routes/users')
const test = require('./routes/test')
const page = require('./routes/page')
const cart = require('./routes/cart')
const account = require('./routes/account')
const checkout = require('./routes/checkout')
const common = require('./routes/common')

// Import API Routes
// app.use(users)
app.use(test)
app.use(page)
app.use(cart)
app.use(account)
app.use(checkout)
app.use(common)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}