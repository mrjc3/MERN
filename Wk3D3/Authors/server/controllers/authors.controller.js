const { Author } = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    // deconstruct info from the request
    const { name } = req.body;
    

    Author.create({name})
    .then(newAuthor => res.json(newAuthor))
    .catch(err => res.status(400).json(err)); // error validation
};

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.status(400).json(err));
};

module.exports.getAuthorById = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
    
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    // console.log("then", deleteConfirmation)
    .catch(err => res.status(400).json(err));
    // console.log("catch", err)
};

