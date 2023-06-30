import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState("Light")
  const [toggle, setToggle] = useState(false)

 // const [items, setItems] = useState(itemData)

  
  function swapTheme(toggle) {
    if (toggle == true){
      setToggle(false)
      setMode("Light")
    } else {setToggle(true)
      setMode("Dark")}
  }

  const appClass = toggle ? "App dark" : "App light"
 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>{swapTheme(toggle)}}>{mode} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
