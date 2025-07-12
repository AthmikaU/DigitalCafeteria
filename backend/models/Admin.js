// models/Admin.js
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true},
  password: { type: String, required: true } // plain text
});

module.exports = mongoose.model('Admin', AdminSchema);
