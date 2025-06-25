import React from 'react';
import './Benefits.css';

export default function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <div className="benefits__inner container">
        {/* Left column: subheading + main heading */}
        <div className="benefits__text">
          <small className="benefits__label">BENEFITS</small>
          <h2 className="benefits__heading">
            The design subscription that connects you to your dream team
          </h2>
        </div>

        {/* Right column: description + button */}
        <div className="benefits__info">
          <p className="benefits__description">
            A subscription can alleviate the stress of staffing, managing expenses, or
            make design calls like a Creative Director. We partner with you to ensure
            that your design elevates your brand to new levels.
          </p>
          <a href="#get-started" className="btn btn--primary benefits__btn">
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
