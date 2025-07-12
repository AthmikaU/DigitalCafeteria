import React from "react";
import Logo from "../assets/Images/sahyadriLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <div className="footer py-3" id="footer">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="d-flex flex-column justify-content-center align-items-center pt-3">
          <h3 className="text-white mt-3">Keep Visiting : )</h3>
        </div>

        <div className="container">
          <footer className="py-5">
            <div className="row row-cols-2 row-cols-md-4 text-white">
              <div className="d-flex align-items-center">
                <img src={Logo} alt="Sahyadri Logo" className="w-50" />
              </div>

              <div>
                <h4>About</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <button
                      onClick={scrollToTop}
                      className="nav-link p-0 text-white bg-transparent border-0 text-start"
                    >
                      About Us
                    </button>
                  </li>
                  <li className="nav-item mb-2">
                    <button
                      onClick={scrollToTop}
                      className="nav-link p-0 text-white bg-transparent border-0 text-start"
                    >
                      Canteen Overview
                    </button>
                  </li>
                  <li className="nav-item mb-2">
                    <button
                      onClick={scrollToTop}
                      className="nav-link p-0 text-white bg-transparent border-0 text-start"
                    >
                      Market
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4>Contact</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2 d-flex align-items-start">
                    <i className="bi bi-geo-alt-fill me-2 mt-1"></i>
                    <a
                      href="https://maps.app.goo.gl/ESSsCTf4jPFfNg2B8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link p-0 text-white"
                    >
                      Sahyadri College, Adyar, Mangalore
                    </a>
                  </li>
                  <li className="nav-item mb-2 d-flex align-items-start">
                    <i className="bi bi-envelope-at me-2 mt-1"></i>
                    <a
                      href="mailto:athmikaubhat@gmail.com"
                      className="nav-link p-0 text-white"
                    >
                      digitalcafeteria@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p className="text-white">&copy; 2025 Digital Cafeteria, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
