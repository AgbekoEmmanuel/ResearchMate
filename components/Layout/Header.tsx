import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, ChevronDown } from 'lucide-react';
import { SERVICES } from '../../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Assignments', path: '/assignments' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-brand-600 font-semibold' : 'text-gray-600 hover:text-brand-600';
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img src="/logos/logo-cyan.png" alt="Research Mate Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive(link.path)}`}
                    >
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                      <div className="py-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services?id=${service.id}`}
                            className="block px-4 py-3 hover:bg-brand-50 transition-colors border-b border-gray-50 last:border-0"
                          >
                            <div className="text-sm font-semibold text-dark-900 mb-0.5">{service.title}</div>
                            <div className="text-xs text-gray-500 line-clamp-1">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/custom-request"
              onClick={closeMenu}
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Custom Request
            </Link>
            <div className="pt-4 px-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-md font-medium text-base hover:bg-brand-700"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;