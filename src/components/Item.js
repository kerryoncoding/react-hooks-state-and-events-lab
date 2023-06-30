import React, {useState} from "react";

function Item({ name, category }) {

  

  const [inCart, setCart] = useState(false) 
  const [cartItem, setCartItem] = useState("") 
  const [cartLabel, setCartLabel] = useState("Add to Cart") 
  const [cartClass, setCartClass] = useState("add") 

  function cart(){
    if (inCart) {
      setCart(false)
      setCartItem("")
      setCartLabel("Add to Cart")
      setCartClass("add")
    } else {
      setCart(true)
      setCartItem("in-cart")
      setCartLabel("Remove from Cart")
      setCartClass("remove")
    }
  }


  return (
    <li className={cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass} onClick={()=>cart()}>{cartLabel}</button>
    </li>
  );
}

export default Item;
