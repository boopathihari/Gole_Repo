import React from "react";
import NavBar from "../Navbar/NavBar";
import { useState, useEffect } from "react";
import ProdCard from "../ProductCard/ProdCard";

export default function WishList({ removeFromWishlist }) {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [Loading, setLoading] = useState(true);

  const initialWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const [wishlist, setWishlist] = useState(initialWishlist);

  useEffect(() => {
    setLoading(true);
    // Fetch product data from your API
    fetch("http://localhost:8000/getProduct")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="navbar bg-white fixed top-0 w-full z-50 ">
        <div className="w-[90%] mx-auto">
          <NavBar
            setLoading={setLoading}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
          />
        </div>
      </div>

      <div className="mt-[120px] w-[90%] mx-auto">
        <h1 className="text-[20px] font-bold">
          YOUR WISHLIST ({wishlist.length})
        </h1>
        <div className="flex flex-wrap mx-auto justify-start gap-[2rem]  mt-4">
          {wishlist.length == 0 ? (
            <>empty</>
          ) : (
            wishlist.map((product) => (
              <ProdCard
                key={product.id}
                product={product}
                removeFromWishlist={removeFromWishlist}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
