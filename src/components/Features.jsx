import React from 'react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Why Choose Thika Talents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our innovative approach to education combines cutting-edge technology with practical learning experiences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glassmorphism rounded-lg p-8 transform hover:translate-y-[-10px] transition-transform">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-6">
              <i className="ri-vr-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Immersive Learning</h3>
            <p className="text-gray-600">Experience education through VR/AR technologies, bringing complex concepts to life in our state-of-the-art immersive labs.</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-8 transform hover:translate-y-[-10px] transition-transform">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-6">
              <i className="ri-team-line ri-2x text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Industry Partnerships</h3>
            <p className="text-gray-600">Work alongside industry leaders through our extensive network of partnerships, providing real-world experience and job opportunities.</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-8 transform hover:translate-y-[-10px] transition-transform">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mb-6">
              <i className="ri-robot-line ri-2x text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">AI-Enhanced Learning</h3>
            <p className="text-gray-600">Our AI-powered learning platform adapts to your unique learning style, providing personalized education pathways for optimal results.</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-8 transform hover:translate-y-[-10px] transition-transform">
            <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-6">
              <i className="ri-global-line ri-2x text-red-600"></i>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Global Connections</h3>
            <p className="text-gray-600">Connect with students and professionals worldwide through our international exchange programs and virtual collaboration platforms.</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-8 transform hover:translate-y-[-10px] transition-transform">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
              <i className="ri-building-4-line ri-2x text-yellow-600"></i>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Modern Facilities</h3>
            <p className="text-gray-600">Study in our cutting-edge campus featuring smart classrooms, innovation labs, and collaborative workspaces designed for the future.</p>
          </div>
          
          <div className="glassmorphism rounded-lg p-8 transform hover:translate-y-[-10px] transition-transform">
            <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mb-6">
              <i className="ri-award-line ri-2x text-teal-600"></i>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Recognized Certifications</h3>
            <p className="text-gray-600">Graduate with internationally recognized certifications and qualifications that set you apart in the competitive job market.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 