const express = require('express');
const router = express.Router();
const { createOrder, updateFromOrder, deleteFromOrder } = require('../controller/orderControllers')
const Order = require('../models/order')



router.post('/update', updateFromOrder)
router.delete('/delete', deleteFromOrder)
router.post('/new', createOrder)




module.exports = router;