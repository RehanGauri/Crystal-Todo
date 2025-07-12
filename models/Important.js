const mongoose = require("mongoose");

const importantSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model("Important", importantSchema);
