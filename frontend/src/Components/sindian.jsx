import React, { useContext } from "react";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";

const foodItems = [
  {
    id: 1,
    name: "BisiBeleBath",
    description: "~with Boondi and Raita",
    price:50,
  },
  {
    id: 2,
    name: "Idli-Vade",
    description: "~with Chutney Sambar",
    price:45,
  },
  {
    id: 3,
    name: "Mysore Masala Dose",
    description: "~with Chutney and Sambar",
    price:50,
  },
];

const SouthIndian = () => {
  const { addToCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const handleOrder = (dish) => {
    addOrder(dish);
  };
  return (
    <div className="container mt-5">
      <h2>South Indian Cuisine</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {foodItems.map((item) => (
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

export default SouthIndian;