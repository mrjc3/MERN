const JokesController = require("../controllers/jokes.controller");
const {getAllJokes, getJokeById, createNewJoke, updateJokeById, deleteJokeById} = JokesController;



module.exports = app => {
    app.get("/api/jokes", getAllJokes);
    app.get("/api/jokes/:id", getJokeById);
    app.put("/api/jokes/update/:id", updateJokeById);
    app.post("/api/jokes/new", createNewJoke);
    app.delete("/api/jokes/delete/:id", deleteJokeById);
};