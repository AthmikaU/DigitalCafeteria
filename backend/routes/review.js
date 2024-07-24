// routes/review.js
const express = require('express');
const router = express.Router();
const Review = require('../models/reviewModel');

// Create a review
router.post('/review', async (req, res) => {
  const { customerName, reviewText, rating } = req.body;

  try {
    const newReview = new Review({ customerName, reviewText, rating });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).send('Server error');
  }
});

// Get all reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
