const {Product} = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    // deconstruct the info from the request
    const {title, price, description} = req.body;
    
    Product.create({title, price, description})
    .then(newProduct => res.json(newProduct))
    .catch(err => res.json(err));
};

module.exports.getAllProducts = (req, res) => {
    Product.find({})
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err));
};

module.exports.getProductById = (req, res) => {
    Product.findOne({_id:req.params.id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.json(err));
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, res.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err));
};





