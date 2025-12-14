import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaBars, FaCouch } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="left-info">
          <FaEnvelope /> info@interior.com &nbsp;&nbsp;
          <FaPhone /> +91-9876543210
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/"><FaCouch /> Home Decor</Link>
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>

        {/* Desktop Navbar Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;
