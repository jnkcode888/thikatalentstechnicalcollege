import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import CourseExplorer from '../components/CourseExplorer';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CampusTour from '../components/CampusTour';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <CourseExplorer />
      <Features />
      <Testimonials />
      <CampusTour />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home; 