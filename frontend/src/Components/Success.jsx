// src/Components/Success.jsx
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-success">✅ Order Placed Successfully!</h2>
      <p className="mt-3">Thank you for your order. It will be ready shortly.</p>
      <Link className="btn btn-primary mt-4" to="/mainmenu">
        Back to Menu
      </Link>
    </div>
  );
};

export default Success;
