const Todo = require("../models/Todo");
const Important = require("../models/Important");
const Suggestion = require("../models/Suggestion");

// Home route
exports.getAll = async (req, res) => {
  try {
    const todos = await Todo.find();
    const important = await Important.find();
    const suggestions = await Suggestion.find();
    res.render("index", { todos, important, suggestions });
  } catch (err) {
    res.status(500).send("Failed to load tasks.");
  }
};

// ✅ Create Todo
exports.createTodo = async (req, res) => {
  const newTodo = await Todo.create({ title: req.body.title });
  if (req.headers["content-type"] === "application/json") {
    return res.json(newTodo);
  }
  res.redirect("/");
};

// ✅ Update Todo
exports.updateTodo = async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (req.headers["content-type"] === "application/json") {
    return res.json(updated);
  }
  res.redirect("/");
};

// ✅ Delete Todo
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  if (req.headers["content-type"] === "application/json") {
    return res.json({ success: true });
  }
  res.redirect("/");
};

// ✅ Toggle Todo
exports.toggleComplete = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();
    if (req.headers["content-type"] === "application/json") {
      return res.json(todo);
    }
    res.redirect("/");
  } catch (err) {
    console.error("❌ Toggle Error:", err);
    res.status(500).json({ error: err.message });
  }
};
