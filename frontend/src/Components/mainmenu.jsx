// Components/MainMenu.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from '../axiosConfig';
import { CartContext } from './cartcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainMenu = () => {
  const [category, setCategory] = useState('North Indian');
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  const categories = ['North Indian', 'South Indian', 'Snacks', 'Juices & Milkshakes'];

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`/menu?category=${category}`);
        // Ensure each item has a unique id for React and cart logic
        const dataWithId = res.data.map(i => ({
          ...i,
          id: i.name  // use name as ID
        }));
        setItems(dataWithId);
      } catch (err) {
        console.error('Failed to fetch menu:', err);
      }
    };
    fetchItems();
  }, [category]);

  const handleAddToCart = (item) => {
    // Add item using id (either _id or name)
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Menu</h2>
      <ul className="nav nav-tabs">
        {categories.map(cat => (
          <li key={cat} className="nav-item">
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
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>{item.description || '-'}</p>
                  <p>₹{item.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(item)}
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
