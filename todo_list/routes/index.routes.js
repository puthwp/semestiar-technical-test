const express = require('express')
const router = express.Router()
module.exports = router

router.use('/api/v1/item', require('./item.routes'))
// router.use('/api/v1/auth'), require('./auth.routes')