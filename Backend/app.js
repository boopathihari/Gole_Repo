const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
const bodyParser = require('body-parser');
const Product = require("./models/Product");
const sharp = require('sharp');
const fs=require('fs');
const cors = require('cors');
const User = require('./models/User');
const path = require('path');
const nodemailer = require('nodemailer'); // Email sending library


app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

const uri = "mongodb+srv://boopathihari2003:flSdvdpPdHkfFyWq@cluster0.3tso1lz.mongodb.net/";
// mongodb+srv://boopathihari2003:q4BgYMAsFSt78z4U@cluster0.3tso1lz.mongodb.net/?retryWrites=true&w=majority
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
  
  
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage: storage });

database();

const products = []; // Placeholder for product data

// API endpoint for uploading products with images
app.post('/api/sellProducts', upload.array('file', 8), async (req, res) => {
  try {
    // Extract product data from the request body
    console.log(req.files);
    const { productName, productCondition, productDescription, productPrice, sellerId } = req.body;

    // Extract file paths from uploaded images
    const images = req.files.map(file => file.filename);

    // Create a new product object
    const newProduct = new Product({
      productName,
      productCondition,
      productDescription,
      productPrice,
      images,
      sellerId
    });

    // Save the new product to the database
    await newProduct.save();
    products.push(newProduct);
    // Respond with the newly created product
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    // If an error occurs, respond with an error message
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/getProducts', async(req, res) => {
  try {
    const products = await Product.find({}); // Find all products
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});


// Route to store user information
app.post('/api/users', async (req, res) => {
  try {
      // Check if user already exists by email
      const existingUser = await User.findOne({ email: req.body.email });
     
      if (existingUser) {
          // User already exists, return an error or update user information if needed
          return res.status(200).json(existingUser);
      }
      // User does not exist, create a new user
      const newUser = await User.create(
        {"name" : req.body.name,
        "email" : req.body.email
      });

      res.status(201).json(newUser);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params; // Extract the product ID from the request parameters

    // Validate the ID format (optional, but recommended)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findById(id); // Find the product by ID
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);  // Send the product data in the response
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product' });
  }
});


// API Endpoint to Fetch User Details by Product ID
app.get('/api/getUserDetail/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the product ID format (optional, but recommended)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    // Fetch the product document
    const product = await Product.findById(id) // Only populate required fields
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const seller_id = product.sellerId;
    const sellerDetails = await User.findById(seller_id) // Only populate required fields
    
    console.log(sellerDetails);

    res.status(200).json(sellerDetails); // Return only the seller details
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Error fetching user details' });
  }
});





// Configure email sending (replace with your credentials and settings)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service
  auth: {
    user: 'boopathihari2003@gmail.com',
    pass: 'xvcd uunu oaqq cukp'
  }
});

app.post('/api/notifySeller', async (req, res) => {
  const { productId, buyerEmail } = req.body;

  try {
    // Fetch product and seller details (replace with your logic)
    const product = await Product.findById(productId);
    const seller = product.sellerId;

    const sellerDetails = await User.findById(seller);
    // Prepare email content
    const emailContent = `
      A buyer is interested in your product "${product.productName}".

      Buyer email: ${buyerEmail}

      You can contact the buyer to discuss further details.

      Thank you,
      Gole
    `;

    // Send email to the seller
    const mailOptions = {
      from: buyerEmail, 
      to: sellerDetails.email,
      subject: 'Buyer Interest Notification for Product: ' + product.productName,
      text: emailContent
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Interest notification sent successfully' });

  } catch (error) {
    console.error('Error sending email notification:', error);
    res.status(500).json({ message: 'Error sending interest notification' });
  }
});


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




