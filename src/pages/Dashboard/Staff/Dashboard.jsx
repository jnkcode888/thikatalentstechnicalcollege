import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import supabase from '../../../services/supabaseClient';
import Sidebar from '../../../components/Sidebar';

const staffLinks = [
  { to: '/staff/uploads', label: 'Uploads' },
  { to: '/staff/students', label: 'Students' },
  { to: '/staff/timetable', label: 'Timetable' },
  { to: '/staff/grades', label: 'Grades' },
  { to: '/staff/announcements', label: 'Announcements' },
];

const StaffDashboard = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout();
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar links={staffLinks} />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Staff Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
        {location.pathname === '/staff' && <Navigate to="/staff/uploads" replace />}
        <Outlet />
      </main>
    </div>
  );
};

export default StaffDashboard; 