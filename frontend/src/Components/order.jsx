import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { OrderContext } from "./ordercontext";
import PaymentModal from "./PaymentModal";
import axios from "../axiosConfig"; // must point to configured baseURL
import "bootstrap/dist/css/bootstrap.min.css";

const Order = () => {
  const { orders, removeOrder, clearOrders } = useContext(OrderContext);
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  const handlePayment = async (paymentMode) => {
    setIsProcessing(true);
    try {
      const response = await axios.post("/order", {
        orders,
        totalAmount,
        paymentMode,
        userId: user?.id,
      });

      console.log("Order saved:", response.data);
      clearOrders();
      setShowModal(false);
      alert("Payment successful!");
      navigate("/success");
    } catch (error) {
      console.error("Order failed:", error);
      alert("Order failed. Try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders to display.</p>
      ) : (
        <>
          <ul className="list-group">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {order.name} - ₹{order.price} × {order.quantity}
                <button className="btn btn-danger" onClick={() => removeOrder(index)}>Remove</button>
              </li>
            ))}
          </ul>

          <h3 className="mt-3">Total: ₹{totalAmount.toFixed(2)}</h3>

          <button className="btn btn-secondary mt-3 mx-3">
            <Link to="/cart" className="text-white text-decoration-none">Back to Cart</Link>
          </button>

          <button
            className="btn btn-success mt-3"
            onClick={() => setShowModal(true)}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>

          <PaymentModal
            show={showModal}
            onHide={() => setShowModal(false)}
            onPay={handlePayment}
            totalAmount={totalAmount}
          />
        </>
      )}
    </div>
  );
};

export default Order;
