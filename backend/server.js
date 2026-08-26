const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import the Product blueprint
const Product = require('./models/Product'); 

// 1. Load the secret variables from the .env file
dotenv.config();

// 2. Initialize the Express application (The Waiter)
const app = express();

// 3. Middleware (Rules for the waiter)
app.use(cors()); // Allows your React frontend to talk to this backend
app.use(express.json()); // Allows the waiter to understand JSON data

// 4. Connect to MongoDB (The Kitchen)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch((err) => console.log('❌ MongoDB Connection Failed:', err));

// 5. Test Route
app.get('/', (req, res) => {
  res.send('Raydoj Backend Server is officially running! 🚀');
});

// --- DASHBOARD STATS ROUTE ---
app.get('/api/dashboard/stats', async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalOrders = 14; 
    const totalRevenue = 122000;
    const totalUsers = 12;

    res.json({
      products: totalProducts,
      orders: totalOrders,
      revenue: totalRevenue,
      users: totalUsers
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// --- CREATE: ADD NEW PRODUCT ---
app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "✅ Product added successfully!", product: savedProduct });
  } catch (error) {
    console.log("❌ Error saving product:", error);
    res.status(500).json({ message: "Failed to add product", error });
  }
});

// --- READ: GET ALL PRODUCTS ---
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // Fetches all, newest first!
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

// --- UPDATE: EDIT PRODUCT ---
app.put('/api/products/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product" });
  }
});

// --- DELETE: REMOVE PRODUCT ---
app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "✅ Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});

// 6. Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});