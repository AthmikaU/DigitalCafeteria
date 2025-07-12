// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//   item: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   totalPaid: { type: Number, required: true },
//   paymentMode: { type: String, enum: ['UPI', 'Cash', 'Card'], required: true },
//   date: { type: Date, default: Date.now },
//   collected: { type: Boolean, default: false }
// });

// module.exports = mongoose.model('Order', OrderSchema);

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // <-- Added field
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPaid: { type: Number, required: true },
  paymentMode: { type: String, enum: ['UPI', 'Cash', 'Card'], required: true },
  date: { type: Date, default: Date.now },
  collected: { type: Boolean, default: false }
});

module.exports = mongoose.model('Order', OrderSchema);
