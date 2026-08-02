const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Temporary food & order data
let surplusFoods = [
  {
    id: 1,
    restaurant: "Royal Biryani",
    name: "Chicken Biryani",
    originalPrice: 180,
    price: 99,
    portions: 5,
  },
  {
    id: 2,
    restaurant: "Pizza Palace",
    name: "Veg Pizza",
    originalPrice: 250,
    price: 149,
    portions: 3,
  },
];

let orders = [];

// Test API
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Smiggy Backend 🚀",
  });
});

// Get all surplus food
app.get("/api/surplus-foods", (req, res) => {
  res.json(surplusFoods);
});

// Add new surplus food
app.post("/api/surplus-foods", (req, res) => {
  const newFood = {
    id: Date.now(),
    restaurant: req.body.restaurant,
    name: req.body.name,
    originalPrice: Number(req.body.originalPrice),
    price: Number(req.body.price),
    portions: Number(req.body.portions),
  };

  surplusFoods.push(newFood);
  console.log("New surplus food added:", newFood);

  res.status(201).json({
    message: "Surplus food added successfully!",
    food: newFood,
  });
});

// Get all placed orders
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

// Place new order
app.post("/api/orders", (req, res) => {
  const newOrder = {
    id: req.body.id || Date.now(),
    items: req.body.items || [],
    subtotal: req.body.subtotal || 0,
    deliveryFee: req.body.deliveryFee || 0,
    total: req.body.total || 0,
    createdAt: req.body.createdAt || new Date().toISOString(),
  };

  orders.push(newOrder);
  console.log("New order received:", newOrder);

  res.status(201).json({
    message: "Order placed successfully!",
    order: newOrder,
  });
});

app.listen(PORT, () => {
  console.log(`Smiggy backend running on http://localhost:${PORT}`);
});