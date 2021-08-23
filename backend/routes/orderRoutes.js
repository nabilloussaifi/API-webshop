const express = require('express');
const router = express.Router();
const { createOrder } = require('../controller/orderControllers')
const auth = require('../middleware/auth')




router.post('/new', auth, createOrder)







module.exports = router;