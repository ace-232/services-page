import React, { useState } from 'react';
import './Testimonial.css';

import arrowLeft from '../assets/Button-pre.png';
import arrowRight from '../assets/Button-next.png';
import gymstoryLogo from '../assets/gym.png';
import avatar1 from '../assets/avatar.png';

const testimonials = [
  {
    logo: gymstoryLogo,
    headline: 'Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!',
    body: `I recently hired Ideapeel for a custom web development project and couldn’t be happier with the results. The team was able to bring my unique ideas to life and create a website that truly stands out.`,
    name: 'Diana Loreza',
    role: 'Director of GYMSTORY',
    avatar: avatar1
  }
  // …you can add more slides here…
];

export default function Testimonial() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);

  return (
    <section className="testimonial">
      <div className="container testimonial__header">
        <small>TESTIMONIAL</small>
        <h2>Customer is Our Top </h2>
        <h2>Priority</h2>
        <p className="testimonial__sub">
          We survey all of our clients, the results of which go directly <br /> to our CEO.
        </p>
      </div>

      <div className="testimonial__slider">
        <button className="arrow arrow--left" onClick={prev}>
          <img src={arrowLeft} alt="Previous" />
        </button>

        <div className="testimonial__card">
          <div className="testimonial__content">
            <img src={t.logo} alt="Gymstory" className="testimonial__logo" />
            <h3 className="testimonial__title">{t.headline}</h3>
            <p className="testimonial__body">{t.body}</p>
            <div className="testimonial__author">
              <span className="author-name">{t.name}</span>
              <span className="author-role">{t.role}</span>
            </div>
          </div>
          <div className="testimonial__avatar">
            <img src={t.avatar} alt={t.name} />
          </div>
        </div>

        <button className="arrow arrow--right" onClick={next}>
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
    </section>
  );
}
