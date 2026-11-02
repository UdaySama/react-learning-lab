import React, { useState } from "react";

function Test20() {
  const [products, setProducts] = useState([]);
  const url = "https://dummyjson.com/products";

  async function getProducts() {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data.products);
  }
  return (
    <div>
      <button onClick={getProducts}>Get Products</button>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test20;
