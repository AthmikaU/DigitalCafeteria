// models/orderModel.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPaid: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
