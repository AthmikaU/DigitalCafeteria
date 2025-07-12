import React, { useEffect, useState } from 'react';
import { Table, Badge } from 'react-bootstrap';
import axios from '../axiosConfig';
import { useParams } from 'react-router-dom';

const OrderHistory = () => {
  const { userId: paramUserId } = useParams();
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState(paramUserId || '');

  useEffect(() => {
    if (!paramUserId) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const localId = storedUser?.userId || storedUser?.id || '';
      setUserId(localId);
    }
  }, [paramUserId]);

  useEffect(() => {
    if (!userId) return;

    const fetchOrders = async () => {
      try {
        const res = await axios.get(`/orders/${userId}`);
        const sorted = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setOrders(sorted);
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };

    fetchOrders();
  }, [userId]);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="container mt-4">
      <h2>📋 Order History</h2>

      {!userId ? (
        <p className="text-danger">User not logged in.</p>
      ) : orders.length === 0 ? (
        <p className="text-muted">No orders placed yet.</p>
      ) : (
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Amount Paid</th>
              <th>Payment Mode</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>₹{order.totalPaid}</td>
                <td>{order.paymentMode}</td>
                <td>{formatDate(order.date)}</td>
                <td>
                  {order.collected ? (
                    <Badge bg="success">Collected</Badge>
                  ) : (
                    <Badge bg="secondary">Not Collected</Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default OrderHistory;