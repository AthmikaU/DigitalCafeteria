// src/Components/Snacks.jsx
import React, { useContext } from "react";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";
import './menu.css';  

const snackItems = [
  {
    id: 'sn1',
    name: "Samosa",
    description: "~with Chutney",
    price: 20,
  },
  {
    id: 'sn2',
    name: "Pav Bhaji",
    description: "~with Buttered Pav",
    price: 40,
  },
  {
    id: 'sn3',
    name: "Bhel Puri",
    description: "~with Sev",
    price: 30,
  },
];

const Snacks = () => {
  const { addToCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const handleOrder = (dish) => {
    addOrder(dish);
  };

  return (
    <div className="container mt-5">
      <h2>Snacks</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {snackItems.map((item) => (
          <div key={item.id} className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Rs. {item.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleOrder(item)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snacks;
