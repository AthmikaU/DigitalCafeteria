import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { OrderContext } from './ordercontext'; // Import OrderContext

const Product = ({ Image, Name, Price, Color }) => {
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToOrder = () => {
    addOrder({ id: Name, name: Name, price: parseFloat(Price), quantity: 1 }); // Add to order
    navigate('/order'); // Navigate to the order page
  };

  return (
    <div className='col-12 col-md-4'>
      <div className='p-1'>
        <div className={`border shadow-sm p-3 ${Color}`}>
          <img src={Image} alt={Name} className='w-75 h-75' />
          <h3>{Name}</h3>
          <p>₹{Price}</p>
          <button
            className='btn bg-white w-100 rounded-0'
            onClick={handleAddToOrder} // Update button to call handleAddToOrder
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
