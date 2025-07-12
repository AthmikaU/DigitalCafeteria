import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PaymentModal = ({ show, onHide, onPay, totalAmount }) => {
  const [paymentMode, setPaymentMode] = useState('UPI');

  const handlePay = () => {
    onPay(paymentMode); // send selected mode to parent
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Options</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>

        <Form.Group>
          <Form.Label>Select Payment Method:</Form.Label>
          <div className="d-flex flex-column gap-2">
            <Form.Check
              type="radio"
              label="UPI"
              name="paymentMode"
              value="UPI"
              checked={paymentMode === 'UPI'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Cash"
              name="paymentMode"
              value="Cash"
              checked={paymentMode === 'Cash'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Card"
              name="paymentMode"
              value="Card"
              checked={paymentMode === 'Card'}
              onChange={(e) => setPaymentMode(e.target.value)}
            />
          </div>
        </Form.Group>

        {paymentMode === 'UPI' && (
          <div className="text-center mt-3">
            <img src={require("../assets/Images/pay.png")} alt="QR Code" width="200" />
            <p>Scan to Pay via UPI</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="success" onClick={handlePay}>Confirm Payment</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;