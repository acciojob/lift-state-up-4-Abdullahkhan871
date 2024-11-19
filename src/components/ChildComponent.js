import React from "react";

const ChildComponent = ({ cartItems }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <li>
              {item.itemName} - ${item.itemPrice}{" "}
              <button
                onClick={(eve) => eve.currentTarget.parentElement.remove()}
              >
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
