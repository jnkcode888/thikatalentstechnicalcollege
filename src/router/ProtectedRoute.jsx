import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.role || !user.approved || (allowedRoles && !allowedRoles.includes(user.role))) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute; 