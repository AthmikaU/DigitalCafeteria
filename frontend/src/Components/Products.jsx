import React, { useContext } from "react";
import Product1 from "../assets/Images/paneertikka.jpg";
import Product2 from "../assets/Images/mushbiriyani.jpg";
import Product3 from "../assets/Images/ramen.jpg";
import Product4 from "../assets/Images/butternaan.jpg";
import Product5 from "../assets/Images/spaghetti.jpg";
import Product from "./Product";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./cartcontext"; 
import { OrderContext } from "./ordercontext"; 

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const { placeOrderNow } = useContext(OrderContext); 
  const navigate = useNavigate();

  const items = [
    { image: Product1, name: "Paneer Tikka", price: 100, color: "p1color" },
    { image: Product2, name: "Mushroom Biriyani", price: 110, color: "p2color" },
    { image: Product3, name: "Ramen", price: 120, color: "p3color" },
    { image: Product4, name: "Butter-Naan & Paneer Butter Masala", price: 150, color: "p4color" },
    { image: Product5, name: "Spaghetti Carbonara", price: 140, color: "p4color" }
  ];

  // Handler for both cart and order logic
  const handleClick = (item, mode) => {
    const product = {
      id: item.name,
      name: item.name,
      price: item.price,
      quantity: 1,
    };

    if (mode === 'cart') {
      addToCart(product);
    } else if (mode === 'order') {
      placeOrderNow(product); 
      addToCart(product);     // add to cart before placing order
      navigate('/order');     // redirect to order page
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-success" id="specials">Today's Specials</h3>
        <Link
          to="/mainmenu"
          className="btn btn-outline-success fw-bold px-3 rounded-0"
        >
          Go to Full Menu
        </Link>
      </div>

      <div className="row g-4">
        {items.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className={`border shadow-sm d-flex flex-column justify-content-between align-items-center text-center p-3 ${item.color}`}>
              <img src={item.image} alt={item.name} className="p-Image mb-3" />
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-success btn-sm rounded-0"
                  onClick={() => handleClick(item, 'cart')}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-dark btn-sm rounded-0"
                  onClick={() => handleClick(item, 'order')}
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

export default Products;