import React from 'react';
import './Pricing.css';
import plusIcon from '../assets/Star-solid.png';

// Note: we’ve added a `description` field to each plan here
const plans = [
  {
    title: 'Standard',
    badge: 'Most Popular',
    badgeType: 'primary',
    description: 'One request at a time. For companies who need on-going design support.',
    price: '$2,995/m',
    subtitle: 'Pause or cancel anytime',
    features: [
      '1× active task at a time',
      'Unlimited revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      'Work with senior designers',
      '2–3 days turn around time',
      'Top tier design'
    ]
  },
  {
    title: 'Growth',
    badge: 'Best value',
    badgeType: 'secondary',
    description: 'Double the requests. For companies with increasing design needs. Limited spots.',
    price: '$4,795/m',
    subtitle: 'Pause or cancel anytime',
    features: [
      '2× active task at a time',
      'Unlimited revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      'Work with senior designers',
      '2–3 days turn around time',
      'Top tier design'
    ]
  },
  {
    title: 'Basic – Weekly',
    badge: null,
    description: 'Perfect if you want to try the subscription out or only have a few one-off tasks.',
    price: '$890/m',
    subtitle: 'Paid per weekly',
    features: [
      'Fixed Scope of work',
      '2 rounds of revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      '1× designer',
      '2–5 days turn around time',
      'Top tier design'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container pricing__header">
        <small className="pricing__label">CLEAR &amp; SIMPLE PRICING</small>
        <h2 className="pricing__title">Simple pricing to level up your brand.</h2>
        <p className="pricing__subtitle">
          Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
        </p>
      </div>

      <div className="pricing__grid">
        {plans.map((plan, i) => (
          <div key={i} className="pricing__card">
            <div className="pricing__top">
              <h3 className="pricing__plan">{plan.title}</h3>
              {plan.badge && (
                <span className={`pricing__badge pricing__badge--${plan.badgeType}`}>
                  {plan.badge}
                </span>
              )}
            </div>

            {/* NEW: Description above divider */}
            <p className="pricing__description">{plan.description}</p>
            <hr className="pricing__divider" />

            {/* Only price here */}
            <div className="pricing__cost">
              <span className="pricing__price">{plan.price}</span>
            </div>

            {/* NEW: Subtitle moved below price */}
            <p className="pricing__period">{plan.subtitle}</p>
            <hr className="pricing__divider" />

            <ul className="pricing__features">
              {plan.features.map((feat, j) => (
                <li key={j}>
                  <img src={plusIcon} alt="" className="pricing__icon" />
                  {feat}
                </li>
              ))}
            </ul>

            <button className="btn btn--outline pricing__btn-call">
              Book A Call
            </button>
            <button className="btn btn--primary pricing__btn-buy">
              Click to buy
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
