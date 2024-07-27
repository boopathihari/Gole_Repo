// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productCondition: { type: String, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: String, required: true },
  images: {
    type: [String], // Assuming you'll store image URLs
    required: true
  },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }, // Reference to User model
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
