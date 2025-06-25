import React from 'react';
import './Cover.css';

// big star for title, small for button
import starLarge from '../assets/Star.png';
import starSmall from '../assets/Star2.png';

export default function Cover() {
  return (
    <section className="cover">
      {/* Big star at top-right of the section */}
      <img src={starLarge} alt="" className="cover__star-title" />

      <div className="cover__inner container">
        <h1>
          Bringing Your<br/>
          Dream Into Reality
        </h1>
        <p>
          We increase revenue and ensure sustainable long-term growth <br />
          for your business through powerful IT solutions.
        </p>

        <div className="cover__btn-wrap">
          {/* small star to the left of the button */}
          <img src={starSmall} alt="" className="cover__star-btn-left" />

          <a href="#get-started" className="btn btn--primary">
            Book A Meeting
          </a>

          {/* small star to the right of the button */}
          <img src={starSmall} alt="" className="cover__star-btn-right" />
        </div>
      </div>
    </section>
  );
}
