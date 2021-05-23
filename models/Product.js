const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    itemid: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    img_name: {
        type: String,
        default: "assets/img/1.jpg"
    }
})

module.exports = Product;