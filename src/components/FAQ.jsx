import React, { useState } from 'react';
import './FAQ.css';
import arrowDown from '../assets/Icon-down.png'; // make sure this path is correct
import arrowUp from '../assets/Icon-up.png';

const faqs = [
  {
    q: 'Do you have specific pricing plans to show?',
    a: 'Yes—Standard, Growth, and Basic.'
  },
  {
    q: 'How many years of experience do you have?',
    a: `Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, 
id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.`
  },
  {
    q: 'What companies have you worked with?',
    a: 'We’ve partnered with startups through Fortune 500s across tech, healthcare, and finance.'
  },
  {
    q: 'Am I safe leaving my company in your hands?',
    a: 'Absolutely—every project is protected by NDA and best-in-class security practices.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="faq">
      <div className="container faq__header">
        <h2>FAQ’s</h2>
        <p className="faq__subtitle">Providing answers to your questions</p>
      </div>

      <div className="container faq__list">
        {faqs.map((f, i) => {
          const isOpen = i === openIndex;
          return (
            <div
              key={i}
              className={`faq__item${isOpen ? ' open' : ''}`}
            >
              <button
  className="faq__question-bar"
  onClick={() => toggle(i)}
>
  <span className="faq__question">{f.q}</span>
  <span className="faq__icon-wrapper">
    <img
      src={isOpen ? arrowUp : arrowDown}
      alt={isOpen ? 'Collapse' : 'Expand'}
      className="faq__icon"
    />
  </span>
</button>
            {isOpen && (
                <div className="faq__answer">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="container faq__form">
        <textarea
          className="faq__textarea"
          placeholder="Ask us what you want to know..."
        />
        <button className="faq__submit">Send</button>
        <small className="faq__note">
          We will answer your questions via email within 48 hours.
        </small>
      </div>
    </section>
  );
}
