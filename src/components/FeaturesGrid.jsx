import React from 'react';
import './FeaturesGrid.css';

import icon1 from '../assets/f1.svg';
import icon2 from '../assets/f2.png';
import icon3 from '../assets/f3.png';
import icon4 from '../assets/f4.png';
import icon5 from '../assets/f5.png';
import icon6 from '../assets/f6.png';
import icon7 from '../assets/f7.png';
import icon8 from '../assets/f8.png';
import icon9 from '../assets/f9.png';

const features = [
  {
    icon: icon1,
    title: 'On-demand requests',
    text: 'Put all your requests in the design queue in Trello, and we’ll knock them out 1 by 1.'
  },
  {
    icon: icon2,
    title: 'Top-notch quality',
    text: 'High-end work from a dedicated team of senior designers that’s always available when you need it.'
  },
  {
    icon: icon3,
    title: 'Powered by – Webflow',
    text: 'We build every site on Webflow, making them dynamic, accessible, and easily scalable. It’s easy for you like Squarespace but better.'
  },
  {
    icon: icon4,
    title: 'Fast. Responsive. Reliable.',
    text: 'Get regular updates on your projects and can expect to receive your designs within 2–3 days.'
  },
  {
    icon: icon5,
    title: 'No Lock-in contracts',
    text: 'Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime.'
  },
  {
    icon: icon6,
    title: 'Great value for money',
    text: 'Get the power of a dedicated design team at a fraction of the cost of a full-time employee. ($54k/yr vs. $112k/yr).'
  },
  {
    icon: icon7,
    title: 'Customized for you',
    text: 'We design and build custom for you. We’re never starting from a template unless you want that—right?'
  },
  {
    icon: icon8,
    title: 'Creative paying',
    text: 'We’re here when you need us and not on payroll when you don’t.'
  },
  {
    icon: icon9,
    title: 'Expert turnovers',
    text: 'You’re getting 10 years of design experience with every request. No hand-holding required.'
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="features">
      {/* Constrained header */}
      <div className="container features__header">
        <h2>Our Features</h2>
      </div>

      {/* Fluid wrapper hides any tiny overflow */}
      <div className="features__fluid">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-item">
              <img src={f.icon} alt={f.title} className="feature-icon" />
              <h3 className="feature-title">
                {i + 1}. {f.title}
              </h3>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}