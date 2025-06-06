import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'News', to: '/news' },
  { label: 'Blog', to: '/blog' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Events', to: '/events' },
  { label: 'Downloads', to: '/downloads' },
  { label: 'Contact Us', to: '/contact' },
];

const socialIcons = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 7L7 17M7 7l10 10" /></svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#fff"/>
              <path d="M10 24V12L18 8L26 12V24L18 28L10 24Z" fill="#1E3A8A"/>
              <rect x="14" y="16" width="8" height="2" rx="1" fill="#fff"/>
            </svg>
            <span className="ml-3 text-xl font-extrabold tracking-wide">TTTC</span>
          </div>
          <p className="text-gray-200 text-sm max-w-xs">
            Empowering the next generation of tech leaders through quality education and practical training.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to} className="text-gray-200 hover:text-yellow-400 text-sm font-medium transition-colors duration-150">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-8 md:mt-0">
          {socialIcons.map((icon) => (
            <a key={icon.label} href={icon.href} className="hover:text-yellow-400 transition-colors duration-150" aria-label={icon.label}>
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-300 text-xs">
        © {new Date().getFullYear()} Thika Talent Technical College. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer; 