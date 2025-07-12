// src/Components/Reviews.jsx
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import ReviewsForm from './reviewsForm'; 
import { Button } from 'react-bootstrap';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('/reviews')
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const handleReviewAdded = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Reviews</h2>

      <div className="text-center mb-4">
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Review
        </Button>
      </div>

      {/* ReviewsForm Modal */}
      <ReviewsForm
        show={showModal}
        onHide={() => setShowModal(false)}
        onReviewAdded={handleReviewAdded}
      />

      {reviews.length === 0 ? (
        <p className="text-center">No reviews yet.</p>
      ) : (
        <div className="row">
          {reviews.map((review) => (
            <div key={review._id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{review.customerName}</h5>
                  <p className="card-text">{review.reviewText}</p>
                  <p className="card-text"><strong>Rating:</strong> {review.rating} / 5</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    {new Date(review.date).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;