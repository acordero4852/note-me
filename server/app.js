const express = require("express");

const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

//routes
const notes = require("./routes/notesRoute");

app.use("/api/v1", notes);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;
