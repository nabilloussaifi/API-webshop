const Order = require('../models/order')
const User = require('../models/user')


// this function should create a order when adding product on cart
const createOrder = async (req, res, next) => {
    const newOrder = new Order({})
    try {
        await newOrder.save()
        await User.findOneAndUpdate({ _id: req.user._id }, { $push: { orders: newOrder._id } })
    } catch (err) {
        console.log(err)
    }
}




// FIRST WAY TO GO

// this function should update a product from the order
const updateFromOrder = (req, res, next) => {

}



// this function should delete a product from the order
const deleteFromOrder = (req, res, next) => {

}





module.exports = {
    createOrder,
    updateFromOrder,
    deleteFromOrder,
};