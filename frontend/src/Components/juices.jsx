// src/Components/JuicesAndMilkshakes.jsx
import React, { useContext } from "react";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";
import './menu.css';  // Import the custom CSS file

const juiceAndMilkshakeItems = [
  {
    id: 'j1',
    name: "Orange Juice",
    description: "~Freshly Squeezed",
    price: 50,
  },
  {
    id: 'j2',
    name: "Mango Juice",
    description: "~With Pulp",
    price: 60,
  },
  {
    id: 'j3',
    name: "Apple Juice",
    description: "~No Added Sugar",
    price: 55,
  },
  {
    id: 'm1',
    name: "Chocolate Milkshake",
    description: "~Rich and Creamy",
    price: 70,
  },
  {
    id: 'm2',
    name: "Strawberry Milkshake",
    description: "~With Fresh Strawberries",
    price: 65,
  },
  {
    id: 'm3',
    name: "Vanilla Milkshake",
    description: "~Classic Flavor",
    price: 60,
  },
];

const JuicesAndMilkshakes = () => {
  const { addToCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const handleOrder = (item) => {
    addOrder(item);
  };

  return (
    <div className="container mt-5">
      <h2>Juices and Milkshakes</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {juiceAndMilkshakeItems.map((item) => (
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

export default JuicesAndMilkshakes;
