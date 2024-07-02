import React from "react";
import Logo from "../assets/Images/sahyadriLogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <div className="footer py-3" id="footer">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="d-flex flex-column justify-content-center align-items-center pt-3">
          <h3 className="text-white mt-3">Keep Visiting : )</h3>
          <div className="input-group mb-3 mt-4 w-50">
            <input
              type="text"
              className="form-control p-2"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-warning px-4" type="button" id="button-addon2">
              Button
            </button>
          </div>
        </div>

        <div className="container">
          <footer className="py-5">
            <div className="row row-cols-2 row-cols-md-4 text-white">
              <div className="d-flex align-items-center">
                <img src={Logo} alt="" className="w-50" />
              </div>
              <div>
                <h4>About</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">About Us</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">Canteen Overview</a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">Market</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4>Contact</h4>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <span><a href="https://maps.app.goo.gl/ESSsCTf4jPFfNg2B8">Sahyadri College, Adyar, Mangalore</a></span>
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      <i className="bi bi-envelope-at me-2"></i>
                      <span><a href="mailto:digitalcafetaria@sahyadri.com">digitalcafetaria@sahyadri.com</a></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex justify-content-between pt-4 mt-4 border-top">
              <p className="text-white">&copy; 2024 Digital Cafetaria, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="#"><i className="bi bi-facebook text-white"></i></a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#"><i className="bi bi-instagram text-white"></i></a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#"><i className="bi bi-twitter text-white"></i></a>
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
