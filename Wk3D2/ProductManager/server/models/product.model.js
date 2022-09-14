const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of product is required! "],
        minlength: [5, "Title must be atleast 5 characters long! "]
    },

    price: {
        type: Number,
        required: [true, "Price of product is required! "],
        minlength: [2, "Price must be atleast 2 digits! "]
    },
    
    description: {
        type: String,
        required: [true, "Product description is required! "],
        minlength: [8, "Product description must be atleast 8 characters long! "]
    },
    
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);


