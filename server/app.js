const express = require("express");

const app = express();

app.use(express.json());

//routes
const notes = require("./routes/notesRoute");

app.use("/api/v1", notes);

module.exports = app;
