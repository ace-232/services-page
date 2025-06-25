import React from 'react';
import './Footer.css';

import logo from '../assets/footer.png';       // your RoundDigital logo
import iconEmail from '../assets/email.png';  // email icon
import iconPhone from '../assets/phone.png';  // phone icon
import iconFacebook from '../assets/f.png';
import iconInstagram from '../assets/insta.png';
import iconLinkedin from '../assets/linkedin.png';
import iconDribbble from '../assets/ball.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand & Description */}
<div className="footer__brand">
  <div className="footer__logo-brand">
    <img src={logo} alt="RoundDigital" className="footer__logo" />
    <span className="footer__name">ROUNDDIGITAL</span>
  </div>
  <p className="footer__desc">
    Kornix – the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.
  </p>
</div>


        {/* Contact & Social */}
        <div className="footer__contact-social">
          <div className="footer__contact">
            <div className="footer__contact-item">
              <img src={iconEmail} alt="" className="footer__contact-icon" />
              <a href="mailto:info@kronix.com">info@kronix.com</a>
            </div>
            <div className="footer__contact-item">
              <img src={iconPhone} alt="" className="footer__contact-icon" />
              <a href="tel:+00112313435">(001) 1231 3435</a>
            </div>
          </div>
          <div className="footer__social">
            <a 
    href="#" 
    aria-label="Facebook" 
    className="footer__social-link footer__social-link--fb"
  >
    <img src={iconFacebook} alt="Facebook" />
  </a>
            <a href="#" aria-label="Instagram"><img src={iconInstagram} alt="" /></a>
            <a href="#" aria-label="LinkedIn"><img src={iconLinkedin} alt="" /></a>
            <a href="#" aria-label="Dribbble"><img src={iconDribbble} alt="" /></a>
          </div>
        </div>
      </div>

      <hr className="footer__divider" />

      <div className="footer__bottom container">
        <ul className="footer__nav">
          <li><a href="#process">Process</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="footer__copy">© 2025 – All Right Reserved</div>
      </div>
    </footer>
  );
}
