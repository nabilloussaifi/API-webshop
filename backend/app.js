require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');



connectDB();

const app = express();

app.use(cors());


app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//Routes
app.use('/api/products', cors(), productRoutes);
app.use('/order', cors(), require('./routes/orderRoutes'))
app.use('/user', cors(), require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})




