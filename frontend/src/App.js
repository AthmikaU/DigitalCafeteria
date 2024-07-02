import { useState } from 'react'
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
import SignInOptions from "./Components/sign";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./Components/mainmenu";
import Dashboard from "./Components/Dashboard"
import Reviews from "./Components/reviews"
import SouthIndian from "./Components/sindian"
import NorthIndian from "./Components/nindian"
import { CartProvider } from "./Components/cartcontext";
import Cart from "./Components/Cart"
import Order from "./Components/order"
import { OrderProvider } from "./Components/ordercontext"; 

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
                  <Delivery />
                  <Food />
                  <ProductSlider />
                  <Products />
                  <Footer />
                  <SignInOptions />
                </>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mainmenu" element={<MainMenu />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/sindian" element={<SouthIndian />} />
            <Route path="/nindian" element={<NorthIndian />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
