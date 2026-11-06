import React, { useState } from "react";

function App5() {
  const [quantity, setQuantity] = useState(1);
  const price = 500;
  return (
    <div>
      App 5 | Day 7
      <br />
      <hr />
      <br />
      <h2>Product Prices: ₹{price}</h2>
      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <h3>Total:- ₹{price * quantity}</h3>
    </div>
  );
}

export default App5;
