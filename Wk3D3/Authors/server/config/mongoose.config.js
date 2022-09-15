const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Establised a connection to the DB"))
    .catch(err => console.log("Something went wrong when connecting to the DB", err));