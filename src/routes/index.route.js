const express = require('express')
const router = express.Router()

const Users =require('./user.route')
const Products = require('./products.route')

router.use('/users', Users)
router.use('/products', Products)

module.exports = router