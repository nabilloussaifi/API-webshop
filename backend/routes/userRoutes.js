const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require('../controller/userController')


router.post('/register', userRegister)



router.get('/login', userLogin)





module.exports = router;