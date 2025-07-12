import React, { useState, useEffect, useContext } from 'react';
import axios from '../axiosConfig';
import { CartContext } from './cartcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainMenu = () => {
  const [category, setCategory] = useState('North Indian');
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`/menu?category=${category}`)
      .then(res => setItems(res.data))
      .catch(err => console.error('Failed to fetch menu:', err));
  }, [category]);

  const categories = ['North Indian', 'South Indian', 'Snacks', 'Juices & Milkshakes'];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Menu</h2>
      <ul className="nav nav-tabs">
        {categories.map(cat => (
          <li className="nav-item" key={cat}>
            <button
              className={`nav-link ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      <div className="row mt-4">
        {items.length > 0 ? (
          items.map(item => (
            <div className="col-md-4 mb-4" key={item._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-4 text-center text-muted">
            No items found for "{category}"
          </div>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
