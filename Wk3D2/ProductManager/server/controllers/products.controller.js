const {Product} = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    // deconstruct the info from the request
    const {title, price, description} = req.body;
    
    Product.create({title, price, description})
    .then(newProduct => res.json(newProduct))
    .catch(err => res.json(err));
};





