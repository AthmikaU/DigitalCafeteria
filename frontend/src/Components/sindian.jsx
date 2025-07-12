// src/Components/sindian.jsx
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartcontext";
import { OrderContext } from "./ordercontext";
import axios from '../axiosConfig';
import './menu.css';

const SouthIndian = () => {
  const { addToCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('/menu?category=South%20Indian'); // uses REACT_APP_API_BASE_URL
        setDishes(response.data);
      } catch (error) {
        console.error("Error fetching South Indian dishes:", error);
      }
    };
    fetchDishes();
  }, []);

  return (
    <div className="container mt-5">
      <h2>South Indian Cuisine</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {dishes.map((item) => (
          <div key={item._id} className="col">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Rs. {item.price.toFixed(2)}</p>
                <button className="btn btn-primary me-2" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
                <button className="btn btn-success" onClick={() => addOrder(item)}>
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
