import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //State
  const [selectedCategory, setCategory] = useState();

  //State for items to be displayed
  const [displayedItems, setToDisplay] = useState([...items]);
    

  function handleChange(event) {
    const sortCategory = event.target.value;
    setCategory((category) => category = sortCategory)
          const filteredItems = items.filter((a) => {
            return a.category === sortCategory;
          });   
          setToDisplay(filteredItems);
  }

            console.log(displayedItems);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
