const Order = require('../models/order');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        // res.json(products);
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        await Order.findOneAndUpdate({ _id: req.order._id }, { $push: { products: product._id } })
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};