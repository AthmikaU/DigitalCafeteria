// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Components/style.css'
import Banner from './Components/Banner'
import Delivery from './Components/Delivery'
import Food from './Components/Food'
import ProductSlider from './Components/ProductSlider'
import Products from './Components/Products'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./Components/mainmenu";
import Dashboard from "./Components/Dashboard"
import Reviews from "./Components/reviews"
import SouthIndian from "./Components/sindian"
import NorthIndian from "./Components/nindian"
import Snacks from './Components/snacks'
import { CartProvider } from "./Components/cartcontext";
import Cart from "./Components/Cart"
import Order from "./Components/order"
import { OrderProvider } from "./Components/ordercontext"; 
import JuicesAndMilkshakes from './Components/juices'

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <ProductSlider />
                  <Food />
                  <Products />
                  <Delivery />
                  <Footer />
                </>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mainmenu" element={<MainMenu />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/sindian" element={<SouthIndian />} />
            <Route path="/nindian" element={<NorthIndian />} />
            <Route path="/snacks" element={<Snacks />} />
            <Route path="/juices" element={<JuicesAndMilkshakes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
