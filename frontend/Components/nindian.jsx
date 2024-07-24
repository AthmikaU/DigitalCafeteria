import React, { useContext } from "react";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";

const foodItems = [
  {
    id: 'n1',
    name: "Butter-Naan",
    description: "~with Mix Veg Curry",
    price: 90,
  },
  {
    id: 'n2',
    name: "North-Indian Mini Meal",
    description: "~with Gulab Jamun",
    price: 65,
  },
  {
    id: 'n3',
    name: "Chole Bhature",
    description: "~with Kurma",
    price: 50,
  },
];

const NorthIndian = () => {
  const { addToCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);

  const handleOrder = (dish) => {
    addOrder(dish);
  };
  return (
    <div className="container mt-5">
      <h2>North Indian Cuisine</h2>
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

export default NorthIndian;