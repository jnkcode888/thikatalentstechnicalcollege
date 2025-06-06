import React from 'react';
import { Link } from 'react-router-dom';

const CourseExplorer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Explore Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover cutting-edge courses designed to prepare you for the careers of tomorrow with hands-on learning and industry-relevant skills.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SCHOOL OF BUSINESS AND ACCOUNTING */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-500/10 to-purple-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-briefcase-line ri-2x text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Business</h3>
              <p className="text-gray-600 text-center">Comprehensive programs in business administration, marketing, and finance.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-purple-600/20 to-purple-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">Business Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Business Administration</li>
                <li className="mb-2">• Digital Marketing</li>
                <li className="mb-2">• Finance & Accounting</li>
                <li className="mb-2">• Supply Chain Management</li>
                <li className="mb-2">• Entrepreneurship</li>
              </ul>
              <Link to="/courses/business" className="glow-button bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* SCHOOL OF HOSPITALITY AND CATERING */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/10 to-red-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                <i className="ri-t-shirt-line ri-2x text-secondary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Fashion & Design</h3>
              <p className="text-gray-600 text-center">Creative programs in fashion design, textile development, and interior design.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-secondary/20 to-red-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">Fashion Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Fashion Design</li>
                <li className="mb-2">• Textile Technology</li>
                <li className="mb-2">• Interior Design</li>
                <li className="mb-2">• Graphic Design</li>
                <li className="mb-2">• 3D Modeling & Animation</li>
              </ul>
              <Link to="/courses/fashion" className="glow-button bg-gradient-to-r from-secondary to-red-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* SCHOOL OF BEAUTY AND FASHION */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <i className="ri-computer-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Information Technology</h3>
              <p className="text-gray-600 text-center">Cutting-edge programs in software development, cybersecurity, and data science.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-blue-600/20 to-blue-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">IT Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Software Engineering</li>
                <li className="mb-2">• Cybersecurity</li>
                <li className="mb-2">• Data Science & AI</li>
                <li className="mb-2">• Cloud Computing</li>
                <li className="mb-2">• Network Administration</li>
              </ul>
              <Link to="/courses/it" className="glow-button bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* SCHOOL OF INFORMATION TECHNOLOGY */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-500/10 to-green-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-4">
                <i className="ri-tools-line ri-2x text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Engineering</h3>
              <p className="text-gray-600 text-center">Innovative programs in mechanical, electrical, and civil engineering disciplines.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-green-600/20 to-green-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">Engineering Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Mechanical Engineering</li>
                <li className="mb-2">• Electrical Engineering</li>
                <li className="mb-2">• Civil Engineering</li>
                <li className="mb-2">• Robotics & Automation</li>
                <li className="mb-2">• Renewable Energy</li>
              </ul>
              <Link to="/courses/engineering" className="glow-button bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* SCHOOL OF SECRETARIAL STUDIES */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <i className="ri-computer-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Information Technology</h3>
              <p className="text-gray-600 text-center">Cutting-edge programs in software development, cybersecurity, and data science.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-blue-600/20 to-blue-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">IT Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Software Engineering</li>
                <li className="mb-2">• Cybersecurity</li>
                <li className="mb-2">• Data Science & AI</li>
                <li className="mb-2">• Cloud Computing</li>
                <li className="mb-2">• Network Administration</li>
              </ul>
              <Link to="/courses/it" className="glow-button bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* SCHOOL OF ENGINEERING */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-green-500/10 to-green-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-4">
                <i className="ri-tools-line ri-2x text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Engineering</h3>
              <p className="text-gray-600 text-center">Innovative programs in mechanical, electrical, and civil engineering disciplines.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-green-600/20 to-green-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">Engineering Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Mechanical Engineering</li>
                <li className="mb-2">• Electrical Engineering</li>
                <li className="mb-2">• Civil Engineering</li>
                <li className="mb-2">• Robotics & Automation</li>
                <li className="mb-2">• Renewable Energy</li>
              </ul>
              <Link to="/courses/engineering" className="glow-button bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* SCHOOL OF SOCIAL SCIENCES */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-500/10 to-purple-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <i className="ri-briefcase-line ri-2x text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Business</h3>
              <p className="text-gray-600 text-center">Comprehensive programs in business administration, marketing, and finance.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-purple-600/20 to-purple-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">Business Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Business Administration</li>
                <li className="mb-2">• Digital Marketing</li>
                <li className="mb-2">• Finance & Accounting</li>
                <li className="mb-2">• Supply Chain Management</li>
                <li className="mb-2">• Entrepreneurship</li>
              </ul>
              <Link to="/courses/business" className="glow-button bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* SCHOOL OF EDUCATION */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-secondary/10 to-red-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                <i className="ri-t-shirt-line ri-2x text-secondary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Fashion & Design</h3>
              <p className="text-gray-600 text-center">Creative programs in fashion design, textile development, and interior design.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-secondary/20 to-red-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">Fashion Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Fashion Design</li>
                <li className="mb-2">• Textile Technology</li>
                <li className="mb-2">• Interior Design</li>
                <li className="mb-2">• Graphic Design</li>
                <li className="mb-2">• 3D Modeling & Animation</li>
              </ul>
              <Link to="/courses/fashion" className="glow-button bg-gradient-to-r from-secondary to-red-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
          
          {/* OTHER COURSES */}
          <div className="h-80 relative card-3d">
            <div className="card-front glassmorphism rounded-lg p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-blue-700/20">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <i className="ri-computer-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Information Technology</h3>
              <p className="text-gray-600 text-center">Cutting-edge programs in software development, cybersecurity, and data science.</p>
            </div>
            
            <div className="card-back glassmorphism rounded-lg p-6 h-full flex flex-col bg-gradient-to-br from-blue-600/20 to-blue-800/30">
              <h3 className="text-xl font-bold text-primary mb-4">IT Programs</h3>
              <ul className="text-gray-600 mb-6 flex-1">
                <li className="mb-2">• Software Engineering</li>
                <li className="mb-2">• Cybersecurity</li>
                <li className="mb-2">• Data Science & AI</li>
                <li className="mb-2">• Cloud Computing</li>
                <li className="mb-2">• Network Administration</li>
              </ul>
              <Link to="/courses/it" className="glow-button bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-2 !rounded-button w-full whitespace-nowrap text-center">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseExplorer; 