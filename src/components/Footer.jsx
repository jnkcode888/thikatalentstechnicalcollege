import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Thika Talents</h3>
            <p className="text-gray-400">
              Empowering the next generation of tech leaders through innovative education and hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-400 hover:text-white transition-colors">Facilities</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/it" className="text-gray-400 hover:text-white transition-colors">Information Technology</Link>
              </li>
              <li>
                <Link to="/programs/engineering" className="text-gray-400 hover:text-white transition-colors">Engineering</Link>
              </li>
              <li>
                <Link to="/programs/business" className="text-gray-400 hover:text-white transition-colors">Business</Link>
              </li>
              <li>
                <Link to="/programs/fashion" className="text-gray-400 hover:text-white transition-colors">Fashion & Design</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt mt-1"></i>
                <span>123 Tech Street, Thika, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone"></i>
                <span>+254 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope"></i>
                <span>info@thikatalents.ac.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thika Talents Technical College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 