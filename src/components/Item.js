import React, { useState } from "react";

function Item({ name, category }) {
//State
  const [inCart, setCart] = useState(false);

//Variable used as ClassName
const cartStatus = inCart ? "in-cart" : ""

//Variable used as Button Name
const btnName = inCart ? "Remove From Cart" : "Add to Cart"

  function addCart() {
    setCart((inCart) => !inCart)
  }
  return (
    <li className= {cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{btnName}</button>
    </li>
  );
}

export default Item;
