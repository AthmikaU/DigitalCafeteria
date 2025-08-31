import React, { useState } from "react";
import Logo from '../assets/Images/sahyadriLogo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    if (typeof setUser === "function") {
      setUser(null);
    }
    navigate("/");
  };

  const scrollToSection = (sectionId) => {
    navigate("/mainpage");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top px-4 border-bottom border-dark">
      <Link to="/" className="navbar-brand d-flex align-items-center me-3">
        <img src={Logo} alt="Sahyadri Logo" height="50" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
        id="navbarNav"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
          {user?.role === "user" && (
            <>
              <li className="nav-item">
                <Link to="/mainpage" className="nav-link menu-color">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/mainmenu" className="nav-link menu-color">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link menu-color">Cart</Link>
              </li>
              <li className="nav-item">
                <Link to="/order" className="nav-link menu-color">Orders</Link>
              </li>
              <li className="nav-item">
                <Link to="/order-history" className="nav-link menu-color">History</Link>
              </li>
              <li className="nav-item">
                <Link to="/reviews" className="nav-link menu-color">Reviews</Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link menu-color btn btn-link px-2"
                  onClick={() => scrollToSection("specials")}
                >
                  Today's Special
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link menu-color btn btn-link px-2"
                  onClick={() => scrollToSection("footer")}
                >
                  Contact
                </button>
              </li>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <li className="nav-item">
                <Link to="/admin-dashboard" className="nav-link menu-color">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin-orders" className="nav-link menu-color">Recent Orders</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/menu-editor" className="nav-link menu-color">Menu Editor</Link>
              </li>
            </>
          )}
        </ul>

        {user && (
          <button
            className="btn btn-outline-dark ms-lg-3 mt-2 mt-lg-0"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
