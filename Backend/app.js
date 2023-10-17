const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
const bodyParser = require('body-parser');
const { castObject } = require("./models/ProductModel");
const sharp = require('sharp');
const fs=require('fs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });


const Product=require('./models/ProductModel');


const uri = "mongodb+srv://boopathihari2003:q4BgYMAsFSt78z4U@cluster0.3tso1lz.mongodb.net/?retryWrites=true&w=majority";

const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true 
    }
    try{
        mongoose.connect(uri);
        console.log('Database connected successfully');
    }catch(error){
        console.log('Not connected');
    }
}
database();


// Adding Product API
app.post('/addProduct', upload.single('image'), (req, res) => {
    const { name, price,description } = req.body;
    console.log(price);
   const image = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };
    res.json({
      name,
      price,
      description,
      image
    });

    Product.create({
        name:name,
        amount:price,
        description:description,
        image:image
    })


  });

  
  app.get('/getProduct',async (req,res)=>
  {
    
  });


 
  



const port = process.env.PORT || 8000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});    

module.exports=app;




