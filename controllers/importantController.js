const Important = require("../models/Important");

// ✅ Create
exports.createImportant = async (req, res) => {
  const newItem = await Important.create({ task: req.body.task });
  if (req.headers["content-type"] === "application/json") {
    return res.json(newItem);
  }
  res.redirect("/");
};

// ✅ Update
exports.updateImportant = async (req, res) => {
  const updated = await Important.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (req.headers["content-type"] === "application/json") {
    return res.json(updated);
  }
  res.redirect("/");
};

// ✅ Delete
exports.deleteImportant = async (req, res) => {
  await Important.findByIdAndDelete(req.params.id);
  if (req.headers["content-type"] === "application/json") {
    return res.json({ success: true });
  }
  res.redirect("/");
};

// ✅ Toggle
exports.toggleComplete = async (req, res) => {
  const item = await Important.findById(req.params.id);
  item.completed = !item.completed;
  await item.save();
  if (req.headers["content-type"] === "application/json") {
    return res.json(item);
  }
  res.redirect("/");
};
