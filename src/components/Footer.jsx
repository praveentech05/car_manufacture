import { Link } from "react-router-dom";
import logo from "../assets/logo/car.png";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-brand-link">
            <img
              src={logo} alt="Company Logo" 
              className="footer-logo"
            />

            <span className="footer-brand-name">
              CAR MANUFACTURING
            </span>
          </Link>

          <p>
            Engineering the future of mobility through innovation,
            performance, and precision.
          </p>
        </div>

        {/* Navigation columns */}
        <div className="footer-navigation">

          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h3>Policies</h3>

            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#cookies">Cookie Policy</a>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © 2026 Car Manufacturing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;