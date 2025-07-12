import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "./ordercontext";

const Product = ({ Image, Name, Price, Color, onAddToCart, mode = "cart" }) => {
  const navigate = useNavigate();
  const { addOrder } = useContext(OrderContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    if (mode === "order-now") {
      addOrder({
        id: Name,
        name: Name,
        price: parseFloat(Price),
        quantity: 1,
        userId: user?.id || ""
      });
      navigate("/order");
    } else if (onAddToCart) {
      onAddToCart(Name, Price);
    }
  };

  return (
    <div className="col-12 col-md-6">
      <div className="p-1">
        <div className={`border shadow-sm d-flex ${Color} align-items-center`}>
          <div className="text-center px-2">
            <img src={Image} alt={Name} className="p-Image" />
          </div>
          <div className="d-flex flex-column justify-content-center px-3">
            <h4>{Name}</h4>
            <p>₹{Price}</p>
            <button
              className="btn bg-white rounded-0 border"
              onClick={handleClick}
            >
              {mode === "order-now" ? "Order Now" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
