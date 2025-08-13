// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularFleet from '../components/PopularFleet';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WhyChooseUs />
      <PopularFleet />
      <Testimonials />
    </div>
  );
};

export default Home;