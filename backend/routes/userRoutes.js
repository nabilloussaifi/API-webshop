const express = require('express');
const router = express.Router();
const { userRegister, userLogin, getUserDetail } = require('../controller/userController')


router.post('/register', userRegister)



router.post('/login', userLogin)


router.post('/getDetail', getUserDetail)


module.exports = router;