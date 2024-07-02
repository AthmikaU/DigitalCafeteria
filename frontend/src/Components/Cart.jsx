// src/Components/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const handleOrder = () => {
    cart.forEach((item) => addOrder(item));
    clearCart();
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Rs. {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <button className="btn btn-success mt-3" onClick={handleOrder}>
            Order All
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;