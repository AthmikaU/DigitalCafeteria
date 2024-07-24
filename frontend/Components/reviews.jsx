// src/Components/Reviews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewsForm from './reviewsForm';
import { Button } from 'react-bootstrap';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleReviewAdded = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="container mt-5">
      <h2>Reviews</h2>
      <Button variant="primary" onClick={() => setShowModal(true)}>Add Review</Button>
      <ReviewsForm
        show={showModal}
        onHide={() => setShowModal(false)}
        onReviewAdded={handleReviewAdded}
      />
      <div className="mt-4">
        <h3>All Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <div className="row">
            {reviews.map((review) => (
              <div key={review._id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{review.customerName}</h5>
                    <p className="card-text">{review.reviewText}</p>
                    <p className="card-text">
                      <strong>Rating:</strong> {review.rating} / 5
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        {new Date(review.date).toLocaleDateString()}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
