import React from "react";
import { Spinner } from "flowbite-react";
import NavBar from "../Components/Navbar/NavBar";
import ProdCard from "../Components/ProductCard/ProdCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [Loading, setLoading] = useState(true);

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
      <div >
        <div className="navbar bg-white fixed top-0 w-full z-50 ">
          <div className="w-[90%] mx-auto">
            <NavBar
              setLoading={setLoading}
              setSearchResults={setSearchResults}
              searchResults={searchResults}
            />
          </div>
        </div>

        {Loading ? (
          <div
            style={{
              marginTop: "18%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Spinner aria-label="Extra large spinner example" size="xl" />
          </div>
        ) : (
          <div className="flex mx-auto  w-[90%] flex-wrap justify-start gap-[2rem] my-3rem  mb-[100px] mt-[120px]">
            {searchResults.length === 0
              ? products.map((product) => (
                  <ProdCard
                    productId={product.id}
                    ProName={product.name}
                    proAmount={product.amount}
                    proDes={product.description}
                    imgsrc={product.image}
                  />
                ))
              : searchResults.map((product) => (
                  <ProdCard
                    productId={product.id}
                    ProName={product.name}
                    proAmount={product.amount}
                    proDes={product.description}
                    imgsrc={product.image}
                  />
                ))}
          </div>
        )}
      </div>

      <div
        id="wishlistToast"
        class="absolute bottom-10 start-1/2 -translate-x-1/2 hidden"
      >
        <h3 class="text-xs text-gray-800 font-semibold sm:text-base dark:text-white">
          <div
            class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
            role="alert"
          >
            <div class="flex p-4">
              <div class="flex-shrink-0">
                <svg
                  class="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
              <div class="ms-3">
                <p class="text-sm text-gray-700 dark:text-gray-400">
                  Item Added Successfully
                </p>
              </div>
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
}
