import React from 'react';
import './CTA.css';
import dotIcon from '../assets/right-arrow.png';

export default function CTA() {
  return (
    <div className="cta‐wrapper">
      <div className="cta">
        <h2 className="cta__title">
          Become part of the <br/>
          design revolution
        </h2>
        <p className="cta__subtitle">
          Jump on a membership and start requesting designs right away!
        </p>
        <button className="cta__btn">
          See Pricing
          <img src={dotIcon} alt="" className="cta__btn-icon"/>
        </button>
      </div>
    </div>
  );
}
