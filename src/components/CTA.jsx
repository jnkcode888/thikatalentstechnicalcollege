import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=abstract%2520futuristic%2520background%2520with%2520blue%2520gradient%252C%2520geometric%2520shapes%252C%2520digital%2520particles%252C%2520technology%2520concept%252C%2520subtle%2520pattern%252C%2520clean%2520design%252C%2520perfect%2520for%2520text%2520overlay&width=1920&height=600&seq=cta&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="absolute inset-0 bg-primary/70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape Your Future?</h2>
          <p className="text-xl mb-8">Join Thika Talents Technical College and experience education reimagined for the digital age. Applications for the Fall 2025 semester are now open.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="glow-button bg-gradient-to-r from-secondary to-yellow-500 text-white px-8 py-3 !rounded-button font-medium whitespace-nowrap">
              Apply Now
            </Link>
            <a 
              href="https://drive.google.com/file/d/1HtgqjaQjIapC5mGq83601-wyT2yUPTJp/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glassmorphism text-white px-8 py-3 !rounded-button font-medium whitespace-nowrap"
            >
              Download Brochure
            </a>
          </div>
          
          <div className="mt-12">
            <p className="text-white/80 mb-4">Subscribe to our newsletter for updates</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 !rounded-button flex-1 border-none focus:outline-none text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="glow-button bg-gradient-to-r from-secondary to-yellow-500 text-white px-6 py-3 !rounded-button font-medium whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 