const express = require('express');
const router = express.Router();
const Item = require('../models/ProductModel');
const multer = require('multer');
const path = require('path');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + extname);
  },
});

const upload = multer({ storage: storage });

// Create a new item with image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, amount, description } = req.body;
    const imageUrl = req.file.filename; // Store the file name in the database

    const newItem = new Item({ name, amount, description, image: imageUrl });
    const savedItem = await newItem.save();

    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ... Add more routes for retrieving, updating, and deleting items as needed.

module.exports = router;
