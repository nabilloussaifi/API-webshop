const express = require('express');
const router = express.Router();

const { createOrder, updateFromOrder, deleteFromOrder } = require('../controller/orderControllers')


router.post('/', createOrder, updateFromOrder, deleteFromOrder)





module.exports = router;