import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ProdCard from './Components/ProductCard/ProdCard';
import SellProduct from './Components/Sellproduct/SellProduct';
import LoginPage from './Components/login/LoginPage';
import Test from './Components/Test';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDes from './Components/ProductDescription/ProductDes';
import WishList from './Components/wishList/wishList';
import DynamicInput from './Components/DynamicInput/Input';

function App() {
  const initialWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const[wishlist , setWishlist] = useState(initialWishlist);

  const addToWishlist = (product,iswishListClicked) =>{
    product.iswishListclicked = iswishListClicked;
    console.log(product);
    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);

    // Update localStorage with the updated wishlist
    localStorage.setItem('wishlist',JSON.stringify(updatedWishlist));
  }

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((product)=> product.id != productId);
    setWishlist(updatedWishlist);

    localStorage.setItem('wishlist',JSON.stringify(updatedWishlist));
    console.log('product removed');
  }

  
  return (
     <Router>
      <div className="App mx-auto ">
        <Routes>
          <Route path="/" element={<Home addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} />} />
          <Route path="/sellProduct" element={<SellProduct />} />
          <Route path="/wishlist" element={<WishList  removeFromWishlist={removeFromWishlist}/>}/>
          <Route path="/Product/:productID" element={<ProductDes />} />
          <Route path="/dynamicInput" element={<DynamicInput />} />

          {/* <Route path="/Product/:productID" element={<productDescription />} /> */}
        </Routes>
      </div>
     </Router>
  );
}

export default App;
