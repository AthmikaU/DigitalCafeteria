// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Components/Navbar';
import './Components/style.css';
import Login from './Components/Login';
import AdminDashboard from './Components/AdminDashboard';
import RecentOrders from './Components/RecentOrders';
import AdminMenuEditor from './Components/AdminMenuEditor';
import MainMenu from './Components/mainmenu';
import Reviews from './Components/reviews';
import SouthIndian from './Components/sindian';
import NorthIndian from './Components/nindian';
import Snacks from './Components/snacks';
import Cart from './Components/Cart';
import Order from './Components/order';
import Success from "./Components/Success";
import JuicesAndMilkshakes from './Components/juices';
import Banner from './Components/Banner';
import Delivery from './Components/Delivery';
import Food from './Components/Food';
import ProductSlider from './Components/ProductSlider';
import Products from './Components/Products';
import Footer from './Components/Footer';
import OrderHistory from './Components/OrderHistory';
import { CartProvider } from './Components/cartcontext';
import { OrderProvider } from './Components/ordercontext';

const PrivateRoute = ({ children, roles, user }) => {
  return user && roles.includes(user.role) ? children : <Navigate to="/" />;
};

const AppWrapper = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const onLogin = (u) => {
    setUser(u);
    localStorage.setItem('user', JSON.stringify(u));
  };

  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<Login onLogin={onLogin} />} />
        <Route path="/mainpage" element={<PrivateRoute roles={['user']} user={user}>
          <>
            <Banner />
            <ProductSlider />
            <Food />
            <Products />
            <Delivery />
            <Footer />
          </>
        </PrivateRoute>} />
        <Route path="/admin-dashboard" element={<PrivateRoute roles={['admin']} user={user}><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin-orders" element={<PrivateRoute roles={['admin']} user={user}><RecentOrders /></PrivateRoute>} />
        <Route path="/admin/menu-editor" element={<PrivateRoute roles={['admin']} user={user}><AdminMenuEditor /></PrivateRoute>} />
        <Route path="/mainmenu" element={<PrivateRoute roles={['user']} user={user}><MainMenu /></PrivateRoute>} />
        <Route path="/sindian" element={<PrivateRoute roles={['user']} user={user}><SouthIndian /></PrivateRoute>} />
        <Route path="/nindian" element={<PrivateRoute roles={['user']} user={user}><NorthIndian /></PrivateRoute>} />
        <Route path="/snacks" element={<PrivateRoute roles={['user']} user={user}><Snacks /></PrivateRoute>} />
        <Route path="/juices" element={<PrivateRoute roles={['user']} user={user}><JuicesAndMilkshakes /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute roles={['user']} user={user}><Cart /></PrivateRoute>} />
        <Route path="/order" element={<PrivateRoute roles={['user']} user={user}><Order /></PrivateRoute>} />
        <Route path="/success" element={<PrivateRoute roles={['user']} user={user}><Success /></PrivateRoute>} />
        <Route path="/order-history" element={<PrivateRoute roles={['user']} user={user}><OrderHistory /></PrivateRoute>} />
        <Route path="/orders/:userId" element={<OrderHistory />} /> {/* public route with URL param */}
        <Route path="/reviews" element={<PrivateRoute roles={['user']} user={user}><Reviews /></PrivateRoute>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <OrderProvider>
          <AppWrapper />
        </OrderProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
