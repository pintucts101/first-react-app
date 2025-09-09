const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const BASE_API_PATH = process.env.BASE_API_PATH || "/api";

// --- APIs --- //

// Simple Hello
app.get(`${BASE_API_PATH}/hello`, (req, res) => {
  res.json({ message: "Hello from Node.js 🚀" });
});

// Users
app.get(`${BASE_API_PATH}/users`, (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Shakti" }
  ]);
});

// Products
app.get(`${BASE_API_PATH}/products`, (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
  ]);
});

// POST Example
app.post(`${BASE_API_PATH}/echo`, (req, res) => {
  res.json({ youSent: req.body });
});

// --- Start server --- //
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}${BASE_API_PATH}`);
});
