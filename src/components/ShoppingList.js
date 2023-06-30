import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState("All")

function filtered(e){
 // console.log(e.target.value)
  setSelectedCategory(e.target.value)
 // console.log(selectedCategory)
}

const newItems = items.filter((item) => {if 
  (selectedCategory === "All") return true 
  return item.category == selectedCategory})

console.log(selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filtered}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
