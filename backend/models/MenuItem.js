const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['North Indian', 'South Indian', 'Snacks', 'Juices & Milkshakes'],
    required: true
  }
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
