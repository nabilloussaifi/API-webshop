const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    products: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],

    user_id: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

    price: {
        type: Number,
        required: false
    },

}

)






const Order = mongoose.model('Order', OrderSchema);
module.exports = Order