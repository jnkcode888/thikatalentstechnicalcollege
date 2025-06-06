import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    // Particle animation
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" 
      style={{
        backgroundImage: "url('https://readdy.ai/api/search-image?query=futuristic%2520tech%2520campus%2520with%2520abstract%2520geometric%2520shapes%2520floating%2520in%2520space%252C%2520blue%2520gradient%2520background%2520with%2520subtle%2520glow%2520effects%252C%2520modern%2520architecture%2520with%2520glass%2520and%2520steel%2520structures%252C%2520holographic%2520displays%252C%2520low%2520poly%25203D%2520elements%252C%2520digital%2520particles&width=1920&height=1080&seq=hero1&orientation=landscape')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-900/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold hero-text mb-4 floating-slow">
              Shape Your Future<br />
              <span className="text-secondary">With Technology</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg floating">
              Thika Talents Technical College offers cutting-edge programs designed to prepare students for the careers of tomorrow in a dynamic, immersive learning environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="glow-button bg-gradient-to-r from-secondary to-yellow-500 text-white px-8 py-3 !rounded-button font-medium whitespace-nowrap">
                Explore Programs
              </Link>
              <Link to="/tour" className="glassmorphism text-white px-8 py-3 !rounded-button font-medium whitespace-nowrap">
                Virtual Tour
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="floating relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/20 rounded-full floating-fast"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-secondary/20 rounded-full floating"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-500/20 rounded-full floating-slow"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div id="particles-container" className="absolute inset-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero; 