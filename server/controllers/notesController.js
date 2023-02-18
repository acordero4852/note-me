const Notes = require("../models/notesModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.createNotes = catchAsyncError(async (req, res, next) => {
  const note = await Notes.create(req.body);

  res.status(201).json({
    success: true,
    note,
  });
});

exports.getAllNotes = catchAsyncError(async (req, res) => {
  const notes = await Notes.find();

  res.status(200).json({
    success: true,
    notes,
  });
});

exports.deleteNote = catchAsyncError(async (req, res, next) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Resource not found!", 404));
  }

  await note.remove();

  res.status(200).json({
    success: true,
    message: "Notes deleted successfully!",
  });
});

exports.getSingleNote = catchAsyncError(async (req, res, next) => {
  const note = await Notes.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Resource not found!", 404));
  }

  res.status(200).json({
    success: true,
    note,
  });
});

exports.updateNote = catchAsyncError(async (req, res, next) => {
  let note = await Notes.findById(req.params.id);

  if (!note) {
    return next(new ErrorHandler("Resource not found!", 404));
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
});
