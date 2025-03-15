// src/Components/ReviewsForm.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const ReviewsForm = ({ show, onHide, onReviewAdded }) => {
  const [customerName, setCustomerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://digitalcafeteria.onrender.com/review', {
        customerName,
        reviewText,
        rating
      });
      onReviewAdded(response.data);
      setCustomerName('');
      setReviewText('');
      setRating(1);
      onHide(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Submit a Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="customerName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="reviewText" className="mt-2">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="rating" className="mt-2">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-3">Submit Review</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewsForm;
