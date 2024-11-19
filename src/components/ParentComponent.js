import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  function accepting(eve) {
    eve.preventDefault();

    const newItemName = eve.target["itemName"].value; // specifice element value by Id ['elementId']
    const newItemPrice = eve.target["itemPrice"].value;

    setCartItems([
      ...cartItems,
      { itemName: newItemName, itemPrice: newItemPrice },
    ]);
    // [...cardItem] not to lose previous values
    // In every submit giving new Object in array so object won't replace each other after that it would easy for maping  
    eve.target.reset();
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <form onSubmit={accepting}>
        <label htmlFor="itemName">Item Name</label>
        <input id="itemName" type="text" />
        <label htmlFor="itemPrice">Item Price</label>
        <input id="itemPrice" type="number" />
        <button type="submit">Add Item</button>
      </form>
      <div>
        <ChildComponent cartItems={cartItems} />
      </div>
    </div>
  );
};

export default ParentComponent;
