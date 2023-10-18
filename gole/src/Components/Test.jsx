import React, { useState, useEffect } from 'react';
export default function Test() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API
    fetch('http://localhost:8000/getProduct')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>Amount: {product.amount}</p>
          <p>Description: {product.description}</p>
          
            <img
              src={product.image}
              alt={product.name}
            />
        </div>
      ))}
    </div>
  )
}
