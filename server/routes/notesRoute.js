const express = require("express");
const {
  getAllNotes,
  createNotes,
  deleteNote,
  getSingleNote,
  updateNote,
} = require("../controllers/notesController");

const router = express.Router();

router.route("/notes").get(getAllNotes);
router.route("/notes/new").post(createNotes);
router.route("/notes/:id").get(getSingleNote);
router.route("/notes/:id").put(updateNote);
router.route("/notes/:id").delete(deleteNote);

module.exports = router;
