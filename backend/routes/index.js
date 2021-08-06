const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')






//welcome page
router.get('/', (req, res) => {
    res.render('welcome');    
    // => create the welcome.ejs file
})


//register page
router.get('/register', (req, res) => {
    res.render('register');    
    // => create the register.ejs file
})
router.get('/', ensureAuthenticated, (req, res) => {
    res.render('welcome', {
        user: req.user
    });
})
module.exports = router;

