import React from 'react';
import HProduct from './HProduct';
import profile from '../assets/Images/profile.png';
import menu from '../assets/Images/food.png';
import reviews from '../assets/Images/rating.png';

const Food = ({ user }) => {
  const userId = user?.userId || user?.id || '';

  return (
    <div className="container-fluid px-4 py-5 healthy">
      <h2 className="text-center display-4 mt-4 fw-bold">
        "Quick Orders, Happy Tummies."
      </h2>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <HProduct Image={profile} navigation="/order-history" label="DASHBOARD" />
          <HProduct Image={menu} navigation="/mainmenu" label="MENU" />
          <HProduct Image={reviews} navigation="/reviews" label="REVIEWS" />
        </div>
      </div>
    </div>
  );
};

export default Food;
