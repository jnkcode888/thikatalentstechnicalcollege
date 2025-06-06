import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseClient';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getSessionAndRole = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        // Fetch role from users table
        const { data, error } = await supabase
          .from('users')
          .select('role')
          .eq('id', session.user.id)
          .single();
        setRole(data?.role || 'student');
      } else {
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    };

    getSessionAndRole();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      getSessionAndRole();
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      setUser(data.user);
      // Role will be fetched by effect
      toast.success('Logged in successfully!');
      // Redirect based on role after effect runs
    } catch (error) {
      toast.error(error.message);
    }
  };

  const register = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      toast.success('Registration successful! Please check your email for verification.');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setRole(null);
      toast.success('Logged out successfully!');
      navigate('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Admin: update a user's role
  const updateUserRole = async (userId, newRole) => {
    const { error } = await supabase
      .from('users')
      .update({ role: newRole })
      .eq('id', userId);
    if (error) throw error;
    toast.success('User role updated!');
  };

  const value = {
    user,
    role,
    loading,
    login,
    register,
    logout,
    updateUserRole, // for admin
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 