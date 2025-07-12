// src/Components/MainPage.jsx
import React from 'react';
import Banner from './Banner';
import ProductSlider from './ProductSlider';
import Food from './Food';
import Products from './Products';
import Delivery from './Delivery';
import Footer from './Footer';

const MainPage = () => {
  return (
    <>
      <Banner />
      <ProductSlider />
      <Food />
      <Products />
      <Delivery />
      <Footer />
    </>
  );
};

export default MainPage;
