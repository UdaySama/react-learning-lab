import React from "react";

function ProductCard({ name, price, category }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price:- {price}</p>
      <p>Category:- {category}</p>
    </div>
  );
}

function Test9() {
  return (
    <div>
      <ProductCard name="Laptop" price={50000} category="Electronics" />
      <ProductCard name="Alovera Geel" price={100} category="Cosmetics" />
      <ProductCard name="Pen" price={50} category="Stationery" />
    </div>
  );
}

export default Test9;
