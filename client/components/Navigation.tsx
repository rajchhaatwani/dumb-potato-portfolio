import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/about', label: 'About us' },
    { href: '/our-work', label: 'Our work' },
    { href: '/services', label: 'Services' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop and Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/80 backdrop-blur-sm border-b border-cream-300/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-dark-950 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-dark-950"></div>
              </div>
              <span className="font-bricolage text-lg font-bold text-dark-950">
                dumb potato
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "font-bricolage text-base transition-colors duration-200 hover:text-orange-500",
                    isActive(item.href) ? "text-orange-500" : "text-dark-950"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              className="hidden md:block px-6 py-3 bg-dark-800 text-cream-50 font-bricolage text-sm rounded-xl hover:bg-dark-900 transition-colors duration-200"
            >
              Contact us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-cream-200/50 backdrop-blur-sm border border-cream-300/30 hover:bg-cream-200/70 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-dark-950" />
              ) : (
                <Menu className="w-6 h-6 text-dark-950" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-dark-950/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-20 right-4 left-4 bg-cream-50/95 backdrop-blur-md border border-cream-300/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100/80 to-cream-200/60 backdrop-blur-md" />
            
            {/* Menu content */}
            <div className="relative p-6">
              {/* Navigation Links */}
              <nav className="space-y-4 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block py-3 px-4 font-bricolage text-lg rounded-xl transition-all duration-200",
                      isActive(item.href)
                        ? "bg-orange-500/20 text-orange-600 font-medium"
                        : "text-dark-950 hover:bg-cream-200/50 hover:text-orange-500"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Contact Button */}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-4 px-6 bg-dark-800 text-cream-50 font-bricolage text-base text-center rounded-xl hover:bg-dark-900 transition-colors duration-200"
              >
                Contact us
              </Link>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-cream-300/40 to-cream-400/30 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
