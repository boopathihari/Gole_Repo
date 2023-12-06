const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
const bodyParser = require('body-parser');
const { castObject } = require("./models/ProductModel");
const sharp = require('sharp');
const fs=require('fs');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });


const Product=require('./models/ProductModel');


const uri = "mongodb+srv://boopathihari2003:q4BgYMAsFSt78z4U@cluster0.3tso1lz.mongodb.net/?retryWrites=true&w=majority";

const database = module.exports = () => {
  
    const connectionParams = {
      useNewUrlParser:true,
      useUnifiedTopology: true,
    }
    try{
      mongoose.connect(uri);
      console.log('Database connected successfully');
      connectionParams 
    }catch(error){
        console.log('Not connected');
    }
}
database();


// Adding Product API
app.post('/addProduct', upload.single('image'), async (req, res) => {
    try {
        const { name, amount, description } = req.body;
        const image = {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        };
    
        const product = new Product({
          name,
          amount,
          description,
          image,
        });
    
        await product.save();
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: 'Error adding a product' });
      }
    
  });

  
  app.get('/getProduct',async (req,res)=>
  {
    try {

        const products = await Product.find();

    // Map the products to include product details and image sources
    const productsWithDetails = products.map(product => {
      const { id , name, amount, description, image } = product;
      let imageSrc = null;

      if (image && image.data) {
        // Create a Base64-encoded image URL
        const base64Image = image.data.toString('base64');
        imageSrc = `data:${image.contentType};base64,${base64Image}`;
      }

      return { id, name, amount, description, image: imageSrc };
    });

    res.json(productsWithDetails);
      } catch (error) {
        res.status(500).json({ error: 'Error getting product information' });
      }
  });


  
app.get('/products/search', async(req, res) => {
  const searchQuery = req.query.name;

    if (!searchQuery) {
      return res.status(400).json({ error: 'Name parameter is required' });
    }
  
    // Assuming you have a data source or model named 'Product'
    const results = await Product.find({ name: { $regex: new RegExp(searchQuery, 'i') } }).lean();
  
     // Map the products to include product details and image sources
      const productsWithDetails = results.map(product => {
      const { id , name, amount, description, image } = product;
      let imageSrc = null;

      if (image && image.data) {
        // Create a Base64-encoded image URL
        const base64Image = image.data.toString('base64');
        imageSrc = `data:${image.contentType};base64,${base64Image}`;
      }

      return { id, name, amount, description, image: imageSrc };
    });

    res.json(productsWithDetails);

    if (results.length === 0) {
      return res.status(404).json({ error: 'No products found matching the search query' });
    }
});



app.get('/products/:productId' , async(req,res)=>{
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
    
        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }
    
        res.json(product);
      } catch (error) {
        res.status(500).json({ error: 'Error getting the specific product' });
      }
    
});



const port = process.env.PORT || 8000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});    

module.exports=app;




