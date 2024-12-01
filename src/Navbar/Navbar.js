import React from "react";
import "../css/Navbar.css";
import logo from "../Images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="App Logo" />
      </div>
      <div className="navbarMenu">
        <div className="home">Home</div>
        <div className="compliance">Compliance</div>
        <div className="carsForSale">Collection</div>
        <div className="services">Services</div>
      </div>
      <div className="search-bar">
        <i className="fas fa-search search-icon"></i>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
}

export default Navbar;