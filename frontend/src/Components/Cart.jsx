// src/Components/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const { cart, clearCart, removeItemFromCart, updateQuantity } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const handleOrder = (item) => {
    addOrder({ ...item, quantity: item.quantity || 1 });
    removeItemFromCart(item.id);
  };

  const handleOrderAll = () => {
    cart.forEach((item) => handleOrder(item));
    clearCart();
  };

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span>{item.name} - Rs. {item.price.toFixed(2)}</span>
                  <input 
                    type="number" 
                    value={item.quantity || 1}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    min="1"
                    className="form-control w-25 d-inline-block ml-3"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => handleOrder(item)}
                  >
                    Order
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt-3" onClick={handleOrderAll}>
            Order All
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
