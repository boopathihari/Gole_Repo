const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String},
    amount: { type: Number},
    description: { type: String},
    image:{data:Buffer,
        contentType:String}
});

module.exports = mongoose.model('Product', productSchema)
