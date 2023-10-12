const express = require('express');
const router = express.Router();
const app = express();
const productModel = require('../models/ProductModel');
const multer = require('multer');


const storage = multer.memoryStorage();
const upload = multer({ storage });


router.get('/',async(req,res)=>{
    res.send('Get Request');
})


router.post('/', upload.single('image'), async(req,res)=>{
    try {
        const { name, description, price } = req.body;
        const image = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };

        const product = new productModel({ name, description, price, image });
        await product.save();

        res.status(201).json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the product.' });
    }
})


module.exports = router;