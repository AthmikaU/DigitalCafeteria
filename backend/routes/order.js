// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create an order
router.post('/order', async (req, res) => {
  const { orders, totalAmount } = req.body;

  try {
    // Save each order to the database
    const savedOrders = await Promise.all(orders.map(order =>
      new Order({
        item: order.name,
        quantity: order.quantity,
        totalPaid: totalAmount
      }).save()
    ));

    res.status(201).json(savedOrders);
  } catch (error) {
    console.error('Error saving orders:', error);
    res.status(500).send('Server error');
  }
});

// Get all orders
router.get('/order', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
