import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glassmorphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-['Pacifico'] text-primary">TTTC</Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link active text-primary font-medium">Home</Link>
            <Link to="/courses" className="nav-link text-gray-700 hover:text-primary font-medium">Courses</Link>
            <Link to="/about" className="nav-link text-gray-700 hover:text-primary font-medium">About</Link>
            <Link to="/facilities" className="nav-link text-gray-700 hover:text-primary font-medium">Facilities</Link>
            <Link to="/contact" className="nav-link text-gray-700 hover:text-primary font-medium">Contact</Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/apply" className="glow-button bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-2 !rounded-button">
              Apply Now
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-gray-700"
            >
              <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line ri-2x`}></i>
            </button>
          </div>
        </div>
        
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4 pb-2`}>
          <Link to="/" className="block py-2 text-primary font-medium">Home</Link>
          <Link to="/courses" className="block py-2 text-gray-700 hover:text-primary font-medium">Courses</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-primary font-medium">About</Link>
          <Link to="/facilities" className="block py-2 text-gray-700 hover:text-primary font-medium">Facilities</Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary font-medium">Contact</Link>
          <div className="pt-2">
            <Link to="/apply" className="glow-button bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-2 !rounded-button w-full block text-center">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 