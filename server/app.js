const express = require("express");

const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());

//routes
const notes = require("./routes/notesRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", notes);
app.use("/api/v1", user);

//middleware for errors
app.use(errorMiddleware);

module.exports = app;
