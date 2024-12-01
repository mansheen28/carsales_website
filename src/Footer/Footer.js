import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Top Navigation Links */}
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#compliance">Compliance</a>
          <a href="#cars-for-sale">Collection</a>
          <a href="#services">Services</a>
        </nav>
      </div>

      {/* Bottom Information */}
      <div className="footer-bottom">
        <p>
          <a href="#privacy-policy">Privacy Policy</a> |{" "}
          <a href="#terms-of-use">Terms of Use</a> | © 2024 Bespoke Motors All
          Rights Reserved | Dealer Management System & Car Dealer Website by{" "}
          <a
            href="https://easycars.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            EasyCars
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
