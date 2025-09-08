import React from "react";
import "./Style/Navbar.css";
import logo from "./Images/9a6454c02d89213be37c161d6f0d85aa730af992.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Algotriton" className="logo" />
        <span className="brand-name">Algotriton</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Software Features </li>
        <li>Contact</li>
      </ul>
      <div className="nav-right">
        <span className="login">Login</span>
        <button className="free-trial-btn">Start Free Trial</button>
      </div>
    </nav>
  );
};

export default Navbar;

