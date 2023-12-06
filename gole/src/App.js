import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ProdCard from './Components/ProductCard/ProdCard';
import SellProduct from './Components/Sellproduct/SellProduct';
import LoginPage from './Components/login/LoginPage';
import Test from './Components/Test';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import productDescription from './Components/ProductDescription/ProductDes'; 
import ProductDes from './Components/ProductDescription/ProductDes';

function App() {
  return (
     <Router>
      <div className="App mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sellProduct" element={<SellProduct />} />
          <Route path="/ProductDetails" element={<ProductDes />} />
          <Route path="/Product/:productID" element={<productDescription />} />
        </Routes>
      </div>
     </Router>
  );
}

export default App;
