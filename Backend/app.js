const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri = "mongodb+srv://boopathihari2003:q4BgYMAsFSt78z4U@cluster0.3tso1lz.mongodb.net/?retryWrites=true&w=majority";

const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true ,
        useUnifiedTopology:true
    }
    try{
        mongoose.connect(uri);
        console.log('Database connected successfully');
    }catch(error){
        console.log('Not connected');
    }
}
database();

app.use(express.json());

const AddProduct = require('./router/ProductRouter');
app.use('/addProduct',AddProduct);


const port = process.env.PORT || 8000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});     







