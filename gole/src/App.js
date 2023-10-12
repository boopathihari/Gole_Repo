import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ProdCard from './Components/ProductCard/ProdCard';
import SellProduct from './Components/Sellproduct/SellProduct';
import LoginPage from './Components/login/LoginPage';

function App() {
  return (
    <div className="App w-[90%] mx-auto px-4">
        <NavBar /> 
      <div className='flex flex-wrap justify-start gap-4 my-3rem'>
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
        <ProdCard />
      </div> 
      
    <SellProduct/>
      
     <LoginPage/>
    </div>
  );
}

export default App;
