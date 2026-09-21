import { Link } from "react-router-dom";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            CAR MANUFACTURING
          </Link>

          <p>
            Engineering the future of mobility through innovation,
            performance, and precision.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Car Manufacturing. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;