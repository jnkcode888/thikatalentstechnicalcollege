import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import supabase from '../../../services/supabaseClient';
import Sidebar from '../../../components/Sidebar';

const studentLinks = [
  { to: '/student/courses', label: 'Course List' },
  { to: '/student/my-courses', label: 'My Courses' },
  { to: '/student/timetable', label: 'Timetable' },
  { to: '/student/assignments', label: 'Assignments & Exams' },
  { to: '/student/fee-statement', label: 'Fee Statement' },
  { to: '/student/announcements', label: 'Announcements' },
  { to: '/student/support', label: 'Support Desk' },
];

const StudentDashboard = () => {
  const { logout, user } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar links={studentLinks} />
      <div className="md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1 items-center">
              <h1 className="text-2xl font-semibold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  Welcome, {user?.email?.split('@')[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {location.pathname === '/student' && <Navigate to="/student/my-courses" replace />}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard; 