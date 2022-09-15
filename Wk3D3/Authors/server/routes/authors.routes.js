const AuthorController = require('../controllers/authors.controller');

// deconstruct contollers
const { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor } = AuthorController;

module.exports = (app) => {
    app.get("/api/authors", getAllAuthors);
    app.get("/api/author/:id", getAuthorById);
    app.post("/api/author/new", createAuthor);
    app.put("/api/author/:id", updateAuthor);
    app.delete("/api/author/:id", deleteAuthor);
};