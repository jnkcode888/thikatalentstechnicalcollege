import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import supabase from '../../../services/supabaseClient';
import Sidebar from '../../../components/Sidebar';

const adminLinks = [
  { to: '/admin/user-management', label: 'User Management' },
  { to: '/admin/applications', label: 'Applications' },
  { to: '/admin/announcements', label: 'Announcements' },
  { to: '/admin/analytics', label: 'Analytics' },
];

const AdminDashboard = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout();
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar links={adminLinks} />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
        {location.pathname === '/admin' && <Navigate to="/admin/user-management" replace />}
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard; 