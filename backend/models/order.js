const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    products: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]

})





const Order = mongoose.model('Order', OrderSchema);
module.exports = Order