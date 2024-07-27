const mongoose = require('mongoose');

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Ensure email uniqueness
    // Other user fields as needed
});

// Create the User model using the userSchema
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
