const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all items (optionally by category)
router.get('/', async (req, res) => {
  const { category } = req.query;

  const filter = category
    ? { category: { $regex: new RegExp(category, 'i') } }  // <-- ignore case
    : {};

  try {
    const items = await MenuItem.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).send("Error fetching menu");
  }
});


// Add new item
router.post('/', async (req, res) => {
  const { name, description, price, category } = req.body;
  try {
    const newItem = new MenuItem({ name, description, price, category });
    await newItem.save();
    res.status(201).json({ msg: 'Item added', item: newItem });
  } catch (err) {
    res.status(400).send('Error adding item');
  }
});

// Delete item
router.delete('/:id', async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Item deleted' });
  } catch (err) {
    res.status(500).send('Error deleting item');
  }
});

// Edit item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).send('Error updating item');
  }
});

module.exports = router;
