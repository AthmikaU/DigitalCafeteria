// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
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

// PrivateRoute
const PrivateRoute = ({ children, roles, user, loading }) => {
  if (loading) return null; 
  if (!user) return <Navigate to="/" replace />;
  return roles.includes(user.role) ? children : <Navigate to="/" replace />;
};

const AppWrapper = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Restore user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  // Login
  const onLogin = (u) => {
    setUser(u);
    localStorage.setItem('user', JSON.stringify(u));
  };

  // Logout with redirect
  const onLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate("/", { replace: true }); // force redirect to login
  };

  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar user={user} onLogout={onLogout} />}
      <Routes>
        <Route path="/" element={<Login onLogin={onLogin} />} />

        {/* USER ROUTES */}
        <Route path="/mainpage" element={
          <PrivateRoute roles={['user']} user={user} loading={loading}>
            <>
              <Banner />
              <ProductSlider />
              <Food />
              <Products />
              <Delivery />
              <Footer />
            </>
          </PrivateRoute>
        } />
        <Route path="/mainmenu" element={<PrivateRoute roles={['user']} user={user} loading={loading}><MainMenu /></PrivateRoute>} />
        <Route path="/sindian" element={<PrivateRoute roles={['user']} user={user} loading={loading}><SouthIndian /></PrivateRoute>} />
        <Route path="/nindian" element={<PrivateRoute roles={['user']} user={user} loading={loading}><NorthIndian /></PrivateRoute>} />
        <Route path="/snacks" element={<PrivateRoute roles={['user']} user={user} loading={loading}><Snacks /></PrivateRoute>} />
        <Route path="/juices" element={<PrivateRoute roles={['user']} user={user} loading={loading}><JuicesAndMilkshakes /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute roles={['user']} user={user} loading={loading}><Cart /></PrivateRoute>} />
        <Route path="/order" element={<PrivateRoute roles={['user']} user={user} loading={loading}><Order /></PrivateRoute>} />
        <Route path="/success" element={<PrivateRoute roles={['user']} user={user} loading={loading}><Success /></PrivateRoute>} />
        <Route path="/order-history" element={<PrivateRoute roles={['user']} user={user} loading={loading}><OrderHistory /></PrivateRoute>} />
        <Route path="/orders/:userId" element={<OrderHistory />} />
        <Route path="/reviews" element={<PrivateRoute roles={['user']} user={user} loading={loading}><Reviews /></PrivateRoute>} />

        {/* ADMIN ROUTES */}
        <Route path="/admin-dashboard" element={<PrivateRoute roles={['admin']} user={user} loading={loading}><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin-orders" element={<PrivateRoute roles={['admin']} user={user} loading={loading}><RecentOrders /></PrivateRoute>} />
        <Route path="/admin/menu-editor" element={<PrivateRoute roles={['admin']} user={user} loading={loading}><AdminMenuEditor /></PrivateRoute>} />
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
