// // // src/Components/Dashboard.jsx
// // import React, { useState, useEffect } from 'react';
// // import { Table } from 'react-bootstrap';
// // import axios from '../axiosConfig';
// // import './style.css';

// // const Dashboard = () => {
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         // const response = await axios.get('https://digitalcafeteria.onrender.com/order');
// //         const response = await axios.get('http://localhost:3000/order');
// //         setOrders(response.data);
// //       } catch (error) {
// //         console.error('Error fetching orders:', error);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="container mt-4">
// //       <h1>Orders Dashboard</h1>
// //       <Table striped bordered hover>
// //         <thead>
// //           <tr>
// //             <th>Item</th>
// //             <th>Quantity</th>
// //             <th>Ordered On</th>
// //             <th>Total Paid</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {orders.map((order) => (
// //             <tr key={order._id}>
// //               <td>{order.item}</td>
// //               <td>{order.quantity}</td>
// //               <td>{new Date(order.date).toLocaleDateString()}</td>
// //               <td>Rs. {order.totalPaid}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// // src/Components/Dashboard.jsx
// import React, { useState, useEffect } from 'react';
// import { Table, Badge } from 'react-bootstrap';
// import axios from '../axiosConfig';
// import './style.css';

// const Dashboard = ({ user }) => {
//   const [allOrders, setAllOrders] = useState([]);
//   const [recentOrders, setRecentOrders] = useState([]);

//   const userId = user?.id || user?.userId || ''; // ✅ adjust according to login payload

//   // 🔽 Fetch all orders for this user
//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get(`/orders/${userId}`);
//       setAllOrders(res.data);
//     } catch (err) {
//       console.error('Error fetching all orders:', err);
//     }
//   };

//   // 🔽 Fetch recent uncollected orders (global, then filter for this user)
//   const fetchRecentOrders = async () => {
//     try {
//       const res = await axios.get('/order/recent');
//       const filtered = res.data.filter(order => order.userId === userId);
//       setRecentOrders(filtered);
//     } catch (err) {
//       console.error('Error fetching recent orders:', err);
//     }
//   };

//   useEffect(() => {
//     if (userId) {
//       fetchOrders();
//       fetchRecentOrders();
//     }
//   }, [userId]);

//   const formatDate = (dateStr) =>
//     new Date(dateStr).toLocaleString('en-IN', {
//       day: 'numeric',
//       month: 'short',
//       hour: '2-digit',
//       minute: '2-digit',
//     });

//   return (
//     <div className="container mt-4">
//       <h2>Welcome, {userId}</h2>

//       <h4 className="mt-4">🕒 Recent Orders (Not Yet Collected)</h4>
//       {recentOrders.length === 0 ? (
//         <p className="text-muted">No recent orders in the past hour.</p>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Qty</th>
//               <th>Paid</th>
//               <th>Time</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recentOrders.map(order => (
//               <tr key={order._id}>
//                 <td>{order.item}</td>
//                 <td>{order.quantity}</td>
//                 <td>₹{order.totalPaid}</td>
//                 <td>{formatDate(order.date)}</td>
//                 <td>
//                   {order.collected ? (
//                     <Badge bg="success">Collected</Badge>
//                   ) : (
//                     <Badge bg="warning">Pending</Badge>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}

//       <h4 className="mt-5">📋 All Your Orders</h4>
//       {allOrders.length === 0 ? (
//         <p className="text-muted">You haven’t placed any orders yet.</p>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Qty</th>
//               <th>Paid</th>
//               <th>Payment Mode</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allOrders
//               .sort((a, b) => new Date(b.date) - new Date(a.date))
//               .map(order => (
//                 <tr key={order._id}>
//                   <td>{order.item}</td>
//                   <td>{order.quantity}</td>
//                   <td>₹{order.totalPaid}</td>
//                   <td>{order.paymentMode}</td>
//                   <td>{formatDate(order.date)}</td>
//                   <td>
//                     {order.collected ? (
//                       <Badge bg="success">Collected</Badge>
//                     ) : (
//                       <Badge bg="secondary">Not Collected</Badge>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
