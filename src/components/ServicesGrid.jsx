import React from 'react';
import './ServicesGrid.css';
import loadIcon from '../assets/loading.png'; // your spinner or arrow icon

const services = [
  'Web design & UI',
  'Social media visuals',
  'Infographics',
  'Design system',
  'Email design',
  'Stationery',
  'Icons',
  'Packaging & merch',
  'Signage',
  'Brochures',
  'Logos & branding',
  'Digital ads',
  'Wireframes'
];

export default function ServicesGrid() {
  return (
    <section id="services" className="services container">
      <small className="services-subheading">OUR CAPABILITIES</small>
      <h2 className="services-heading">We can help you with...</h2>

      <div className="services-grid">
        {services.map((title, i) => (
          <button key={i} className="service-pill">
            {title}
          </button>
        ))}
      </div>

      <div className="services-load-more">
        <img src={loadIcon} alt="Load more" className="load-icon" />
        <span>Load More</span>
      </div>
    </section>
  );
}
