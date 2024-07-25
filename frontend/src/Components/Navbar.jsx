import React from "react";
import Logo from '../assets/Images/sahyadriLogo.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SignInOptions from './sign'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="container-fluid px-5 header sticky-top">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
            <img src={Logo} alt=""/>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2 menu-color">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 menu-color" to="/mainmenu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 menu-color" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-2 menu-color" to="/order">
              Orders
            </Link>
          </li>
          <li>
            <AnchorLink href="#specials" className="nav-link px-2 menu-color" >
              Today's Special
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#footer" className="nav-link px-2 menu-color">
              Contact
            </AnchorLink>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <SignInOptions />
        </div>
      </header>
    </div>
  );
};

export default Navbar;