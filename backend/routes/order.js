// routes/order.js
const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create an order
router.post('/order', async (req, res) => {
  const { orders, totalAmount, paymentMode, userId } = req.body;

  try {
    const savedOrders = await Promise.all(orders.map(order =>
      new Order({
        userId,
        item: order.name,
        quantity: order.quantity,
        totalPaid: totalAmount,
        paymentMode,
        collected: false
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

// Get orders by userId
router.get('/orders/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).send('Server error');
  }
});

// Get recent uncollected orders (last 1 hour)
router.get('/order/recent', async (req, res) => {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

  try {
    const recentOrders = await Order.find({
      date: { $gte: oneHourAgo },
      collected: false
    }).sort({ date: -1 });

    res.json(recentOrders);
  } catch (error) {
    console.error('Error fetching recent orders:', error);
    res.status(500).send('Server error');
  }
});

router.patch('/order/:id/collected', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { collected: true },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).send('Server error');
  }
});


module.exports = router;
