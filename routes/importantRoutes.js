const express = require("express");
const router = express.Router();
const {
  createImportant,
  updateImportant,
  deleteImportant,
  toggleComplete
} = require("../controllers/importantController");

router.post("/", createImportant);
router.post("/update/:id", updateImportant);
router.post("/delete/:id", deleteImportant);
router.post("/toggle/:id", toggleComplete);

module.exports = router;
