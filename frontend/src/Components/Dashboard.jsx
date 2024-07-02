import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './style.css'; 
import F1 from '../assets/Images/samosa.jpg'
import F2 from '../assets/Images/panipuri.jpg'
import F3 from '../assets/Images/noodles.jpg'
import F4 from '../assets/Images/gobi.jpg'
import F5 from '../assets/Images/watermelon.jpeg'
import F6 from '../assets/Images/pasta.jpg'

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const mockOrders = [
        { id: 1, item: 'Samosa', quantity: 3, date: '03/06/2024', img: F1 },
        { id: 2, item: 'Watermelon Juice', quantity: 4, date: '03/06/2024', img: F5 },
        { id: 3, item: 'Noodles', quantity: 2, date: '07/06/2024', img: F3 },
        { id: 4, item: 'Gobi Manchurian', quantity: 2, date: '09/06/2024', img: F4 },
        { id: 5, item: 'Panipuri', quantity: 2, date: '15/06/2024', img: F2 },
        { id: 6, item: 'Pasta', quantity: 1, date: '28/06/2024', img: F6 },
      ];
      setOrders(mockOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Orders Dashboard</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {orders.map((order) => (
          <Col key={order.id}>
            <Card>
              <Card.Img variant="top" src={order.img} height={300} alt={`Image for Order ${order.id}`} />
              <Card.Body>
                <Card.Title>Order ID: {order.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Item: {order.item}</Card.Subtitle>
                <Card.Text>
                  Quantity: {order.quantity}
                  <br />
                  <br />
                  Ordered On: {order.date}
                </Card.Text>
              </Card.Body>
            </Card>
            <br/><br/>
          </Col>
          
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
