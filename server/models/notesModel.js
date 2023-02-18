const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  topic: {
    type: String,
    required: [true, "Please provide topic."],
  },
  notes: {
    type: String,
    required: [true, "Please provide notes."],
  },
});

module.exports = mongoose.model("Notes", notesSchema);
