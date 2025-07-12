const express = require("express");
const router = express.Router();
const {
  createTodo,
  updateTodo,
  deleteTodo,
  toggleComplete
} = require("../controllers/todoController");

router.post("/", createTodo);
router.post("/update/:id", updateTodo);
router.post("/delete/:id", deleteTodo);
router.post("/toggle/:id", toggleComplete);

module.exports = router;
