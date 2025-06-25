import React from 'react';
import './Process.css';

// replace these with your real assets
import iconRocket   from '../assets/process.png';
import iconPenTool  from '../assets/process2.png';
import iconRefresh  from '../assets/process3.png';
import iconArrow    from '../assets/arrow.png';

const steps = [
  {
    icon: iconRocket,
    title: 'Subscribe & Get Started',
    text: 'Submit as many design tasks as you need—no limits.'
  },
  {
    icon: iconPenTool,
    title: 'Polished Designs, On Time',
    text: 'Our designers deliver your request within a few days.'
  },
  {
    icon: iconRefresh,
    title: 'Revisions Made Simple',
    text: 'Unlimited tweaks until it’s exactly right.'
  },
];

export default function Process() {
  return (
    <section id="process" className="process container">
      <small className="process-subheading">HOW WE WORK</small>
      <h2 className="process-heading">
        Get a dedicated design team at a fraction of the cost.
      </h2>
      <p className="process-text">
        Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need—no limits.
      </p>
      <a href="#get-started" className="btn btn--secondary process-cta">
        See Pricing
      </a>

      <div className="process-flow">
        {steps.map((s, i) => (
          <React.Fragment key={s.title}>
            <div className="process-node">
              <div className="process-icon-circle">
                <img src={s.icon} alt={s.title} className="process-icon" />
              </div>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.text}</p>
            </div>

            {i < steps.length - 1 && (
              <img
                src={iconArrow}
                alt="arrow"
                className="process-arrow"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
