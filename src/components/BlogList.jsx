import React from 'react';
import './BlogList.css';

import img1 from '../assets/blog1.jpg';
import img2 from '../assets/blog2.jpg';
import img3 from '../assets/blog3.jpg';
import img4 from '../assets/blog4.jpg';
import img5 from '../assets/blog5.jpg';
import img6 from '../assets/blog6.jpg';

const posts = [
  {
    img: img1,
    cat: 'Branding',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled…'
  },
  {
    img: img2,
    cat: 'TikTok',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled…'
  },
  {
    img: img3,
    cat: 'Logo Design',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled…'
  },
  {
    img: img4,
    cat: 'RE',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled…'
  },
  {
    img: img5,
    cat: 'AI',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled…'
  },
  {
    img: img6,
    cat: 'NFT',
    title: 'What is the branding, and what we need it?',
    excerpt: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled…'
  },
];

export default function BlogList() {
  return (
    <section className="blog-list">
      <div className="container blog-list__header">
        <small className="blog-list__label">BLOGS</small>
        <h2 className="blog-list__title">News &amp; Articles</h2>
        <p className="blog-list__sub">Best Articles to get started</p>
      </div>

      <div className="container blog-list__grid">
        {posts.map((p, i) => (
          <article key={i} className="blog-list__card">
            <img src={p.img} alt={p.title} className="blog-list__img" />
            <div className="blog-list__body">
              <span className="blog-list__cat">{p.cat}</span>
              <h3 className="blog-list__card-title">{p.title}</h3>
              <p className="blog-list__excerpt">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="container blog-list__footer">
        <button className="btn btn--outline blog-list__load">
          Load More
        </button>
      </div>
    </section>
  );
}
