const asyncHandler = require("express-async-handler");

//@route  GET/api/golas
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});
//@route  POST/api/golas
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text feild ");
  }
  res.status(200).json({ message: "setgoals" });
});
//@route  PUT/api/golas/:id
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goals ${req.params.id}` });
});
//@route  DELETE/api/golas/:id
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
