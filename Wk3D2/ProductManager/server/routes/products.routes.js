const ProductsController = require('../controllers/products.controller');

const {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} = ProductsController;

module.exports = app => {
    app.get("/api/products", getAllProducts);
    app.get("/api/product/:id", getProductById);
    app.post("/api/product/new", createProduct);
    app.put("/api/product/:id", updateProduct);
    app.delete("/api/product/:id", deleteProduct);
};