const { default: mongoose } = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required! "],
        minlength: [15, "Set up must be atleast 15 characters long! "]
    },

    punchline: {
        type: String,
        required: [true, "Punchline is required! "],
        minlength: [15, "Punchline must be at least 15 characters long! "]
    },

},  {timestamps: true});
    

const Joke = mongoose.model("joke", JokesSchema);

module.exports = Joke;