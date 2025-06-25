import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/LOGO.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <img src={logo} alt="YourLogo" className="navbar__logo" />
        <nav className={open ? 'navbar__nav navbar__nav--open' : 'navbar__nav'}>
          <ul className="navbar__list">
            <li><a href="#process">Process</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#get-started" className="btn btn--primary">Get Started</a></li>
          </ul>
        </nav>
        <button 
          className="navbar__toggle" 
          onClick={() => setOpen(o => !o)} 
          aria-label="Toggle menu"
        >☰</button>
      </div>
    </header>
);
}
