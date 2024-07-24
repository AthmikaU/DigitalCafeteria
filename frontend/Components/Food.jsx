import React from 'react'
import HProduct from './HProduct'
import profile  from '../assets/Images/profile.png'
import menu  from '../assets/Images/food.png'
import reviews from '../assets/Images/rating.png'
import { NavLink } from "react-router-dom";

const Food = () => {
  
  return (
    <div className="container-fluid px-4 py-5 healthy">
      <h2 className="text-center display-4 mt-4 fw-bold">
        "Quick Orders, Happy Tummies."
      </h2>
      <div classNam="container mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <HProduct
            Image={profile}
            navigation={
              <NavLink to="/dashboard" className="nav-link">
                DASHBOARD
              </NavLink>
            }
          />
          <HProduct
            Image={menu}
            navigation={
              <NavLink to="/mainmenu" className="nav-link">
                MENU
              </NavLink>
            }
          />
          <HProduct
            Image={reviews}
            navigation={
              <NavLink to="/reviews" className="nav-link">
                REVIEWS
              </NavLink>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Food