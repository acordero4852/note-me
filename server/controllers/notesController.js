const Notes = require("../models/notesModel");

exports.createNotes = async (req, res, next) => {
  const note = await Notes.create(req.body);

  res.status(201).json({
    success: true,
    note,
  });
};

exports.getAllNotes = async (req, res) => {
  const notes = await Notes.find();

  res.status(200).json({
    success: true,
    notes,
  });
};

exports.deleteNote = async (req, res, next) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    return res.status(500).json({
      success: false,
      message: "Resource not found!",
    });
  }

  await note.remove();

  res.status(200).json({
    success: true,
    message: "Notes deleted successfully!",
  });
};

exports.getSingleNote = async (req, res, next) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    return res.status(500).json({
      success: false,
      message: "Resource not found!",
    });
  }

  res.status(200).json({
    success: true,
    note,
  });
};

exports.updateNote = async (req, res, next) => {
  let note = await Notes.findById(req.params.id);

  if (!note) {
    return res.status(500).json({
      success: false,
      message: "Resource not found!",
    });
  }

  note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    userFindAndModify: false,
  });

  res.status(201).json({
    success: true,
    note,
  });
};
