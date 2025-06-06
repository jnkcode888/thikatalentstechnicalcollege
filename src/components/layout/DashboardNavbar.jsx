import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const navLinks = {
  admin: [
    { label: 'Dashboard', to: '/admin' },
    { label: 'Users', to: '/admin/users' },
    { label: 'Applications', to: '/admin/applications' },
    { label: 'Announcements', to: '/admin/announcements' },
    { label: 'Analytics', to: '/admin/analytics' },
  ],
  staff: [
    { label: 'Dashboard', to: '/staff' },
    { label: 'Uploads', to: '/staff/uploads' },
    { label: 'Students', to: '/staff/students' },
    { label: 'Timetable', to: '/staff/timetable' },
    { label: 'Grades', to: '/staff/grades' },
    { label: 'Announcements', to: '/staff/announcements' },
  ],
  student: [
    { label: 'Dashboard', to: '/student' },
    { label: 'Courses', to: '/student/courses' },
    { label: 'My Courses', to: '/student/my-courses' },
    { label: 'Timetable', to: '/student/timetable' },
    { label: 'Assignments', to: '/student/assignments' },
    { label: 'Fee Statement', to: '/student/fee-statement' },
    { label: 'Announcements', to: '/student/announcements' },
    { label: 'Support', to: '/student/support' },
  ],
};

const DashboardNavbar = () => {
  const { role, user, logout } = useAuth();
  const location = useLocation();
  const links = navLinks[role] || [];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link to={`/${role || 'student'}`} className="text-lg font-bold tracking-wide">TTTC Dashboard</Link>
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded hover:bg-primary-dark transition-colors duration-150 ${location.pathname.startsWith(link.to) ? 'bg-primary-dark' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sm font-medium text-white/80">{user?.email}</span>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-white text-primary font-semibold rounded px-4 py-1.5 hover:bg-gray-100 transition-all duration-150"
            >
              Menu
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-1 z-10">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar; 