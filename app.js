// server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

// Import routes
const todoRoutes = require('./routes/todoRoutes');
const importantRoutes = require('./routes/importantRoutes');
const suggestionRoutes = require('./routes/suggestionRoutes');

// Import controller for root route
const { getAll } = require('./controllers/todoController');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', getAll); // Home page
app.use('/api/todos', todoRoutes);
app.use('/api/important', importantRoutes);
app.use('/api/suggestions', suggestionRoutes);

// MongoDB Connect & Start Server
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected");

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB Connection Error:", err);
});
