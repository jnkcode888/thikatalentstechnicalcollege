import React, { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const animateCounters = () => {
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);
        
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(() => animateCounters(), 1);
        } else {
          counter.innerText = target;
        }
      });
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    if (counters.length > 0) {
      observer.observe(counters[0].parentElement.parentElement);
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="glassmorphism rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold gradient-text mb-2 counter" data-target="25">0</div>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold gradient-text mb-2 counter" data-target="4500">0</div>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold gradient-text mb-2 counter" data-target="98">0</div>
            <p className="text-gray-600">Employment Rate</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-4xl font-bold gradient-text mb-2 counter" data-target="42">0</div>
            <p className="text-gray-600">Industry Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 