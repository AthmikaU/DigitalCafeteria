// Components/Cart.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, clearCart, removeItemFromCart, updateQuantity } = useContext(CartContext);
  const { setBulkOrders } = useContext(OrderContext);

  const totalAmount = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleOrderAll = () => {
    if (cart.length === 0) return alert("Cart is empty!");
    
    // Send all cart items to OrderContext
    setBulkOrders(cart.map(item => ({
      id: item.name,        // use name as id
      name: item.name,
      price: item.price,
      quantity: item.quantity
    })));

    clearCart();           // Clear cart after sending orders
    navigate("/order");    // Redirect to Orders page
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart!</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.name} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <span>{item.name} - ₹{item.price.toFixed(2)}</span>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    onChange={(e) => updateQuantity(item.name, parseInt(e.target.value))}
                    min="1"
                    className="form-control w-25 d-inline-block ms-3"
                  />
                </div>
                <div>
                  <button className="btn btn-danger" onClick={() => removeItemFromCart(item.name)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3"><strong>Total: ₹{totalAmount.toFixed(2)}</strong></p>
          <button className="btn btn-success mt-3" onClick={handleOrderAll}>
            Proceed to Pay
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
