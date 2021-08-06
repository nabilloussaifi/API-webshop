require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");

//passport config:x
require('./config/passport')(passport)

connectDB();

const app = express();

//EJS
app.set('view engine', 'ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({ extended: false }));
//express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

app.use(express.json());

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

