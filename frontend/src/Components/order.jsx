// src/Components/Order.jsx
import React, { useContext, useState } from "react";
import { OrderContext } from "./ordercontext";
import PaymentModal from "./PaymentModal";
import { Link } from "react-router-dom"; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = () => {
  const { orders, removeOrder, clearOrders } = useContext(OrderContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await axios.post('http://localhost:3000/order', { orders, totalAmount });
      console.log('Orders saved successfully:', response.data);

      clearOrders();
      setShowModal(false);
      alert('Payment successful! Order placed.');
    } catch (error) {
      console.error('Error saving orders:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <>
          <ul className="list-group">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {order.name} - Rs. {order.price} x {order.quantity}
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeOrder(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total Amount: Rs. {totalAmount.toFixed(2)}</h3>
          <button className="btn btn-secondary mt-3 mx-4">
            <Link className="nav-link px-2 menu-color text-white" to="/cart">
              Back to Cart
            </Link>
          </button>
          <button
            className="btn btn-success mt-3"
            onClick={() => setShowModal(true)}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
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
