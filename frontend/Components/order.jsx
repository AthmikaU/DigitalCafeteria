// // src/Components/Order.jsx
// import React, { useContext } from "react";
// import { OrderContext } from "./ordercontext";

// const Order = () => {
//   const { orders } = useContext(OrderContext);

//   return (
//     <div className="container mt-5">
//       <h2>Your Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <ul>
//           {orders.map((order, index) => (
//             <li key={index}>{order.name} - Rs. {order.price}</li>
//           ))}
//           <button className="btn btn-success mt-3">
//               <a href="https://payments.google.com/" className="links">Pay Now</a>
//           </button>
//         </ul>
        
//       )}
        
//     </div>
//   );
// };

// export default Order;



// src/Components/Order.jsx
// import React, { useContext } from "react";
// import { OrderContext } from "./ordercontext";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Order = () => {
//   const { orders, removeOrder } = useContext(OrderContext);

//   const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

//   return (
//     <div className="container mt-5">
//       <h2>Your Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <>
//           <ul className="list-group">
//             {orders.map((order, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                 {order.name} - Rs. {order.price} x {order.quantity}
//                 <div>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => removeOrder(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <h3 className="mt-3">Total Amount: Rs. {totalAmount.toFixed(2)}</h3>
//           <button className="btn btn-secondary mt-3">
//             <a href="/" className="text-white">Back to Cart</a>
//           </button>
//           <button className="btn btn-success mt-3">
//             <a href="https://payments.google.com/" className="text-white">Pay Now</a>
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Order;



// import React, { useContext, useState } from "react";
// import { OrderContext } from "./ordercontext";
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Order = () => {
//   const { orders, removeOrder, clearOrders } = useContext(OrderContext); // Ensure clearOrders is provided in OrderContext
//   const [isProcessing, setIsProcessing] = useState(false);

//   const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

//   const handlePayment = async () => {
//     setIsProcessing(true);
//     try {
//       // Send orders to the backend
//       const response = await axios.post('/api/orders', orders);
//       console.log('Orders saved successfully:', response.data);

//       // Clear orders from context
//       clearOrders();

//       // Redirect to payment or success page
//       window.location.href = "https://payments.google.com/";
//     } catch (error) {
//       console.error('Error saving orders:', error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Your Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <>
//           <ul className="list-group">
//             {orders.map((order, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                 {order.name} - Rs. {order.price} x {order.quantity}
//                 <div>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => removeOrder(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <h3 className="mt-3">Total Amount: Rs. {totalAmount.toFixed(2)}</h3>
//           <button className="btn btn-secondary mt-3">
//             <a href="/" className="text-white">Back to Cart</a>
//           </button>
//           <button
//             className="btn btn-success mt-3"
//             onClick={handlePayment}
//             disabled={isProcessing}
//           >
//             {isProcessing ? 'Processing...' : 'Pay Now'}
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Order;

// src/Components/Order.jsx
import React, { useContext, useState } from "react";
import { OrderContext } from "./ordercontext";
import PaymentModal from "./PaymentModal";
import { Link } from "react-router-dom"; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = () => {
  const { orders, removeOrder, clearOrders } = useContext(OrderContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const totalAmount = orders.reduce((total, order) => total + order.price * order.quantity, 0);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const response = await axios.post('http://localhost:3000/order', { orders, totalAmount });
      console.log('Orders saved successfully:', response.data);

      clearOrders();
      setShowModal(false);
      alert('Payment successful! Order placed.');
    } catch (error) {
      console.error('Error saving orders:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <>
          <ul className="list-group">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {order.name} - Rs. {order.price} x {order.quantity}
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeOrder(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total Amount: Rs. {totalAmount.toFixed(2)}</h3>
          <button className="btn btn-secondary mt-3">
            <Link className="nav-link px-2 menu-color text-white" to="/cart">
              Back to Cart
            </Link>
          </button>
          <button
            className="btn btn-success mt-3"
            onClick={() => setShowModal(true)}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
          <PaymentModal
            show={showModal}
            onHide={() => setShowModal(false)}
            onPay={handlePayment}
            totalAmount={totalAmount}
          />
        </>
      )}
    </div>
  );
};

export default Order;
