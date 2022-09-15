const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required! "],
        minlength: [3, "Authors name must be atleast 3 characters long! "]
    },
}, {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);