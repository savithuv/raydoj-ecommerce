const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  // This will hold the links to your 8 uploaded images
  images: [{ type: String }] 
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);