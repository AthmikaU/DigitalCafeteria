// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Admin Login
router.post('/login/admin', async (req, res) => {
  const { username, password } = req.body;

  if (username === 'cafeadmin' && password === 'admin123') {
    return res.status(200).json({ role: 'admin', username });
  }

  return res.status(401).json({ msg: 'Invalid admin credentials' });
});

// User Login
router.post('/login/user', async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id });

  if (!user) return res.status(404).json({ msg: 'User not found' });
  if (password !== user.password) return res.status(401).json({ msg: 'Incorrect password' });

  return res.status(200).json({ role: 'user', id });
});

// Register User (admin triggers this)
router.post('/register/user', async (req, res) => {
  const { id, password } = req.body;

  const exists = await User.findOne({ id });
  if (exists) return res.status(409).json({ msg: 'User already exists' });

  const newUser = new User({ id, password }); 
  await newUser.save();

  return res.status(201).json({ msg: 'User registered' });
});

// Get all registered users (for admin only)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'id'); // only fetch "id"
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching users' });
  }
});


module.exports = router;
