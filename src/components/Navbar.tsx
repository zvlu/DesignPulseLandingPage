import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  BookOpen,
  Cloud,
  CheckSquare,
  Headphones,
  Activity,
  Leaf,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// Import the SVG logo from the root folder
import DesignPulseLogo from '/DesignPulseStudio.svg'; // Adjust path based on your setup

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPortfolioOpen(false); // Close portfolio dropdown when mobile menu closes
  };
  const togglePortfolio = () => setIsPortfolioOpen(!isPortfolioOpen);

  // New handler to close dropdown and menu on portfolio item click
  const handlePortfolioClick = () => {
    setIsPortfolioOpen(false); // Close dropdown
    setIsMenuOpen(false); // Close mobile menu (if open)
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio', isDropdown: true },
    { to: '/blog', label: 'Blog', icon: <BookOpen className="h-4 w-4 mr-1" /> },
    { to: '/pricing', label: 'Pricing' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
    { to: '/internal-training', label: 'Training', icon: <BookOpen className="h-4 w-4 mr-1" /> }, // New Training tab
  ];

  const portfolioLinks = [
    { to: '/cloudpeak', label: 'CloudPeak', icon: <Cloud className="h-4 w-4 mr-1" /> },
    { to: '/taskflow', label: 'TaskFlow', icon: <CheckSquare className="h-4 w-4 mr-1" /> },
    { to: '/sonicpulse', label: 'SonicPulse', icon: <Headphones className="h-4 w-4 mr-1" /> },
    { to: '/fitcore', label: 'FitCore', icon: <Activity className="h-4 w-4 mr-1" /> },
    { to: '/greenleaf', label: 'GreenLeaf', icon: <Leaf className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header className="bg-white shadow-md shadow-gray-100/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Site Name */}
          <NavLink
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <img
              src={DesignPulseLogo}
              alt="DesignPulse Studio Logo"
              className="h-28 w-28"
            />
            <span
              className="text-xl font-semibold text-gray-900 tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {/* Empty span as per your code */}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ to, label, icon, isDropdown }) => (
              <div key={to} className="relative">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center text-sm font-medium ${
                      isActive && !isDropdown
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors duration-200`
                  }
                  onClick={
                    isDropdown
                      ? (e) => {
                          e.preventDefault();
                          togglePortfolio();
                        }
                      : undefined
                  }
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {icon}
                  {label}
                  {isDropdown &&
                    (isPortfolioOpen ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </NavLink>
                {isDropdown && isPortfolioOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10">
                    {portfolioLinks.map(({ to, label, icon }) => (
                      <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 text-sm font-medium ${
                            isActive
                              ? 'text-gray-900 bg-gray-100'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          } transition-colors duration-200`
                        }
                        onClick={handlePortfolioClick} // Close dropdown on click
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {icon}
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors duration-200 shadow-sm"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map(({ to, label, icon, isDropdown }) => (
              <div key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center py-2 px-3 text-sm font-medium ${
                      isActive && !isDropdown
                        ? 'text-gray-900 bg-gray-100 rounded-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    } transition-colors duration-200`
                  }
                  onClick={
                    isDropdown
                      ? (e) => {
                          e.preventDefault();
                          togglePortfolio();
                        }
                      : closeMenu
                  }
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {icon}
                  {label}
                  {isDropdown &&
                    (isPortfolioOpen ? (
                      <ChevronUp className="h-4 w-4 ml-1" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1" />
                    ))}
                </NavLink>
                {isDropdown && isPortfolioOpen && (
                  <div className="pl-6 space-y-1">
                    {portfolioLinks.map(({ to, label, icon }) => (
                      <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                          `flex items-center py-2 px-3 text-sm font-medium ${
                            isActive
                              ? 'text-gray-900 bg-gray-100 rounded-md'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          } transition-colors duration-200`
                        }
                        onClick={handlePortfolioClick} // Close dropdown and menu on click
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {icon}
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center py-2 bg-gray-800 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors duration-200"
                onClick={closeMenu}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;