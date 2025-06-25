// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Process from './components/Process';
import Benefits from './components/Benefits';
import ServicesGrid from './components/ServicesGrid';
import Portfolio from './components/Portfolio';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import BlogList from './components/BlogList';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
      <>
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Process />
      <Portfolio />
      <ServicesGrid />
      <Benefits />
      <FeaturesGrid />
      <Testimonial />
      <Pricing />
      <BlogList />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
export default App;
