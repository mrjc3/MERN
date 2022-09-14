const ProductsController = require('../controllers/products.controller');

const {createProduct} = ProductsController;

module.exports = app => {
    app.post("/api/product/new", createProduct);
};