import React from 'react';
import './TrustedBrands.css';

import b1 from '../assets/Logomark1.png';
import b2 from '../assets/Logomark2.png';
import b3 from '../assets/Logomark3.png';
import b4 from '../assets/Logomark4.png';
import b5 from '../assets/Logomark5.png';
import trustBanner from '../assets/trustbrand.png';

export default function TrustedBrands() {
  const brands = [
    { src: b1, label: 'Layers' },
    { src: b2, label: 'Quotient' },
    { src: b3, label: 'Circoolees' },
    { src: b4, label: 'Hourglass' },
    { src: b5, label: 'Command + R' },
  ];

  return (
    <section className="trusted-brands">
      <div className="trusted-brands__inner">
        {/* your single banner with the red bars + text baked in */}
        <img
          src={trustBanner}
          alt="Trusted by Amazing Brands"
          className="trusted-brands__banner"
        />

        {/* logo + label side by side */}
        <div className="brands-panel">
        <div className="brands-inline">
          {brands.map((b, i) => (
            <div key={i} className="brand-item">
              <img src={b.src} alt={b.label} className="brand-icon" />
              <span className="brand-label">{b.label}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
