import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PaymentModal = ({ show, onHide, onPay, totalAmount }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Total Amount to be paid: Rs. {totalAmount.toFixed(2)}</p>
        <div className="d-flex justify-content-center">
          <img src="../assets/Images/profile.png" alt="QR Code" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="success" onClick={onPay}>Pay Now</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
