import React from "react";
import NavBar from "../Components/Navbar/NavBar";
import ProdCard from "../Components/ProductCard/ProdCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API
    fetch("http://localhost:8000/getProduct")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <NavBar />

      <div className="flex flex-wrap justify-start gap-[2rem] my-3rem mt-10">
        {products.map((product) => (
          <ProdCard
            productId={product.id}
            ProName={product.name}
            proAmount={product.amount}
            proDes={product.description}
            imgsrc={product.image}
          />
        ))}
      </div>
    </div>
  );
}
