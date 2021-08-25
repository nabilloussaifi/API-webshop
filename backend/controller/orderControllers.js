const Order = require('../models/order')
const User = require('../models/user')





// this function should create a order when adding product on cart
const createOrder = async (req, res, next) => {
    // console.log(req.body.user_id)
    console.log(req.body)
    const newOrder = new Order({})
    const products = await req.body.products;
    try {
        await newOrder.save()
        await Order.findOneAndUpdate({ _id: newOrder._id }, { $push: { price: req.body.price } })
        await Order.findOneAndUpdate({ _id: newOrder._id }, { $push: { user_id: req.body.user_id } })
        for (const product of products) {
            console.log(product);
            await Order.findOneAndUpdate({ _id: newOrder._id }, { $push: { products: product } })
        }

        await User.findOneAndUpdate({ _id: newOrder.user_id }, { $push: { orders: newOrder._id } })
    } catch (err) {
        console.log(err)
        // }
    }

}









module.exports = {
    createOrder
};