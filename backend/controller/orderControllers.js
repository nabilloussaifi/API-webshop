const Order = require('../models/order')
const User = require('../models/user')


// le save() avant de findandupdate


// this function should create a order when adding product on cart
const createOrder = async (req, res, next) => {
    // console.log(req.body)
    // console.log(req.body.user_id)

    const newOrder = new Order({})
    await Order.findOneAndUpdate({ _id: newOrder._id }, { $push: { user_id: req.body.user_id } })
    const products = await req.body.products;
    console.log(products)
    for (const product of products) {
        // await console.log(product);
        await Order.findOneAndUpdate({ _id: newOrder._id }, { $push: { products: product } })
    }
    try {

        await newOrder.save()
        //     await User.findOneAndUpdate({ _id: newOrder.user_id }, { $push: { orders: newOrder._id } })
    } catch (err) {
        console.log(err)
        // }
    }

}









module.exports = {
    createOrder
};