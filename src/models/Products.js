const mongoose = require("mongoose");
const {Schema} = mongoose;
const ProductsSchema = new Schema({
    id:{
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        typeof: Number,
    },
    stock: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model("Products", ProductsSchema);