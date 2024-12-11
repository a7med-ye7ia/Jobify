import React from "react";
import "./Navbar.css";
import icon from "../../../../public/jobify.svg";
/**
 * The Navbar component renders a navigation bar with logo, links to home, jobs, about and contact pages, and two buttons for login and register.
 * @returns {JSX.Element} The rendered navbar.
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img className="logo-icon" src="../../../public/jobify.svg"></img>
          <span className="logo-text">Job Portal</span>
        </div>
      </div>
      <div className="navbar-center">
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
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
