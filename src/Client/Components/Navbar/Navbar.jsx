import React, { useState } from "react";
import "./Navbar.css";

/**
 * The Navbar component renders a responsive navigation bar with logo, links, and authentication buttons.
 * @returns {JSX.Element} The rendered navbar.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img className="logo-icon" src="../../Jobify.svg" alt="Jobify Logo" />
          <span className="logo-text">Job Portal</span>
        </div>
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="/home">
              Home
            </a>
          </li>
          <li>
            <a href="/Jobs">Jobs</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="navbar-right active">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
