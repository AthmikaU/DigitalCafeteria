import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchRecentOrders = async () => {
      try {
        const response = await axios.get('/order/recent'); // Uses REACT_APP_API_BASE_URL
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching recent orders:', error);
      }
    };

    fetchRecentOrders();
    const interval = setInterval(fetchRecentOrders, 60000); // Refresh every minute

    return () => clearInterval(interval); // Clean up
  }, []);

  const markAsCollected = async (id) => {
    try {
      await axios.patch(`/order/${id}/collected`); // Uses REACT_APP_API_BASE_URL
      setOrders(prev => prev.filter(order => order._id !== id));
    } catch (error) {
      console.error('Error marking as collected:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Recent Orders (Uncollected, last 1 hour)</h2>
      {orders.length === 0 ? (
        <p>No recent orders.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {orders.map((order) => (
            <div className="col" key={order._id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{order.item}</h5>
                  <p className="card-text">Qty: {order.quantity}</p>
                  <p className="card-text">Paid: Rs. {order.totalPaid}</p>
                  <p className="card-text">Mode: {order.paymentMode}</p>
                  <p className="card-text text-muted">
                    Ordered on: {new Date(order.date).toLocaleString()}
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => markAsCollected(order._id)}
                  >
                    Mark as Collected
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
