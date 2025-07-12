const express = require("express");
const router = express.Router();
const {
  createSuggestion,
  updateSuggestion,
  deleteSuggestion,
  toggleComplete
} = require("../controllers/suggestionController");

router.post("/", createSuggestion);
router.post("/update/:id", updateSuggestion);
router.post("/delete/:id", deleteSuggestion);
router.post("/toggle/:id", toggleComplete);

module.exports = router;
