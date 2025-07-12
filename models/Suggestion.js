const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  idea: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model("Suggestion", suggestionSchema);
