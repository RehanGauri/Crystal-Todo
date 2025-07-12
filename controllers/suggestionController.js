const Suggestion = require("../models/Suggestion");

// ✅ Create
exports.createSuggestion = async (req, res) => {
  const newItem = await Suggestion.create({ idea: req.body.idea });
  if (req.headers["content-type"] === "application/json") {
    return res.json(newItem);
  }
  res.redirect("/");
};

// ✅ Update
exports.updateSuggestion = async (req, res) => {
  const updated = await Suggestion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (req.headers["content-type"] === "application/json") {
    return res.json(updated);
  }
  res.redirect("/");
};

// ✅ Delete
exports.deleteSuggestion = async (req, res) => {
  await Suggestion.findByIdAndDelete(req.params.id);
  if (req.headers["content-type"] === "application/json") {
    return res.json({ success: true });
  }
  res.redirect("/");
};

// ✅ Toggle
exports.toggleComplete = async (req, res) => {
  const item = await Suggestion.findById(req.params.id);
  item.completed = !item.completed;
  await item.save();
  if (req.headers["content-type"] === "application/json") {
    return res.json(item);
  }
  res.redirect("/");
};
