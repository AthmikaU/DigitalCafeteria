import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, clearCart, removeItemFromCart, updateQuantity } = useContext(CartContext);
  const { setBulkOrders } = useContext(OrderContext);

  const handleOrderAll = () => {
    setBulkOrders(cart);    
    clearCart();            
    navigate("/order");     
  };

  return (
    <div className="container mt-5">
      <h2>Orders</h2>
      {cart.length === 0 ? (
        <p>No orders done yet!</p>
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
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                    className="form-control w-25 d-inline-block ml-3"
                  />
                </div>
                <div>
                  <button className="btn btn-danger" onClick={() => removeItemFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt-3" onClick={handleOrderAll}>Proceed to Pay</button>
        </>
      )}
    </div>
  );
};

export default Cart;
