const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')






//welcome page
router.get('/', (req, res) => {
    res.send('welcome');    
    // => create the welcome.ejs file
})


//register page
router.get('/register', (req, res) => {
    res.send('register');    
    // => create the register.ejs file
})
router.get('/', ensureAuthenticated, (req, res) => {
    res.send('welcome', {
        user: req.user
    });
})
module.exports = router;

