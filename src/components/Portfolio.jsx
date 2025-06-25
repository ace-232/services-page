import React from 'react';
import './Portfolio.css';
import w1  from '../assets/work1.png';
import w2  from '../assets/work2.png';
import w3  from '../assets/work3.png';
import w4  from '../assets/work4.png';
import w5  from '../assets/work5.png';
import w6  from '../assets/work6.png';
import w7  from '../assets/work7.png';
import w8  from '../assets/work8.png';
import w9  from '../assets/work9.png';
import w10 from '../assets/work10.png';
import w11 from '../assets/work11.png';
import w12 from '../assets/work12.png';
import loadIcon from '../assets/loading.png'; // use your “Load More” arrow/spinner

const works = [
  w1, w4, w3, w10,
  w2, w5, w8, w11,
  w7, w6, w9, w12,
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio container">
      <h2 className="portfolio-heading">Our Beautiful Works</h2>
      <p className="portfolio-text">
        We help our clients grow their bottom line with clear and professional websites.
      </p>

      <button className="portfolio-load-more">
        <img src={loadIcon} alt="" className="load-icon" />
        Load More
      </button>

      <div className="portfolio-grid">
        {works.map((src, i) => (
          <div key={i} className="portfolio-item">
            <img src={src} alt={`Work ${i+1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
