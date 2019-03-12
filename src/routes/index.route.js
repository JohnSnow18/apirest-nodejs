const express = require('express')
const router = express.Router()

const Users =require('./user.route')

router.use('/users', Users)

module.exports = router