import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import supabase from '../../services/supabaseClient';

const Logo = () => (
  <div className="flex items-center space-x-2">
    {/* Placeholder academic icon */}
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="#1E3A8A"/>
      <path d="M10 24V12L18 8L26 12V24L18 28L10 24Z" fill="#fff"/>
      <rect x="14" y="16" width="8" height="2" rx="1" fill="#1E3A8A"/>
    </svg>
    <div className="leading-tight">
      <span className="block text-xl font-extrabold text-primary">TTTC</span>
      <span className="block text-xs text-gray-500 -mt-1">THIKA TALENT TECHNICAL COLLEGE</span>
    </div>
  </div>
);

const navLinks = [
  { label: 'About Us', to: '/about' },
  {
    label: 'Academics',
    dropdown: [
      { label: 'Programs', to: '/courses' },
      { label: 'Admissions', to: '/apply' },
      { label: 'Calendar', to: '/calendar' },
    ],
  },
  {
    label: 'Community',
    dropdown: [
      { label: 'Alumni', to: '/alumni' },
      { label: 'Events', to: '/events' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  { label: 'News & Updates', to: '/news' },
];

function Dropdown({ label, items, mobile, onClick }) {
  const [open, setOpen] = useState(false);
  if (mobile) {
    return (
      <div className="w-full">
        <button
          className="flex items-center justify-between w-full text-gray-700 hover:text-primary font-medium px-3 py-2 focus:outline-none"
          onClick={() => setOpen((o) => !o)}
        >
          {label}
          <svg className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
        {open && (
          <div className="pl-4 pb-2">
            {items.map((item) => (
              <Link key={item.to} to={item.to} onClick={onClick} className="block px-2 py-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-150">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium px-3 py-2 focus:outline-none">
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-100 rounded-lg shadow-lg z-20">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors duration-150">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MeetingModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');
    try {
      if (onSubmit) await onSubmit(form);
    } catch (err) {
      setError('Failed to schedule meeting. Please try again.');
      setSubmitted(false);
      return;
    }
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative animate-fade-in">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-primary">Schedule a Meeting</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold text-center py-8">Thank you! Your meeting request has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" type="text" required value={form.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <input name="date" type="date" required value={form.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
            </div>
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <button type="submit" className="w-full bg-primary text-white font-semibold rounded-md px-6 py-2 shadow hover:bg-primary-dark transition-all duration-150">Send Request</button>
          </form>
        )}
      </div>
    </div>
  );
}

const Navbar = () => {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Save meeting to Supabase
  const handleMeetingSubmit = async (form) => {
    const { error } = await supabase.from('meetings').insert([
      {
        name: form.name,
        email: form.email,
        date: form.date,
        message: form.message,
      },
    ]);
    if (error) throw error;
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <MeetingModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleMeetingSubmit} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <Logo />
          </Link>
          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <Dropdown key={link.label} label={link.label} items={link.dropdown} />
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-gray-700 hover:text-primary font-medium px-3 py-2 transition-colors duration-150 ${location.pathname === link.to ? 'text-primary font-bold' : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => setModalOpen(true)} className="bg-primary text-white font-semibold rounded-md px-6 py-2 shadow hover:bg-primary-dark transition-all duration-150">
              Schedule a Meeting
            </button>
            <Link to="/login" className="bg-white border border-primary text-primary font-semibold rounded-md px-6 py-2 shadow hover:bg-primary hover:text-white transition-all duration-150">
              Login
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Open main menu"
            >
              {mobileOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg rounded-b-xl py-4 px-2 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <Dropdown key={link.label} label={link.label} items={link.dropdown} mobile onClick={() => setMobileOpen(false)} />
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`text-gray-700 hover:text-primary font-medium px-3 py-2 rounded transition-colors duration-150 ${location.pathname === link.to ? 'text-primary font-bold' : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button onClick={() => { setModalOpen(true); setMobileOpen(false); }} className="w-full mt-2 bg-primary text-white font-semibold rounded-md px-6 py-2 shadow hover:bg-primary-dark transition-all duration-150">
                Schedule a Meeting
              </button>
              <Link to="/login" onClick={() => setMobileOpen(false)} className="w-full mt-2 bg-white border border-primary text-primary font-semibold rounded-md px-6 py-2 shadow hover:bg-primary hover:text-white transition-all duration-150 text-center">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 