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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border border-foreground"></div>
              </div>
              <span className="font-bricolage text-lg font-bold text-foreground">
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
                    isActive(item.href) ? "text-orange-500" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              className="hidden md:block px-6 py-3 bg-primary text-primary-foreground font-bricolage text-sm rounded-xl hover:bg-primary/80 transition-colors duration-200"
            >
              Contact us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl glass hover:bg-cream-200/60 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground transition-transform duration-200" />
              ) : (
                <Menu className="w-6 h-6 text-foreground transition-transform duration-200" />
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
            className="fixed inset-0 bg-background/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-20 right-4 left-4 glass rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Enhanced glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100/60 to-cream-200/40 backdrop-blur-lg" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/10 to-orange-300/5" />
            
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
                        : "text-foreground hover:bg-muted/50 hover:text-orange-500"
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
                className="block w-full py-4 px-6 bg-primary text-primary-foreground font-bricolage text-base text-center rounded-xl hover:bg-primary/80 transition-colors duration-200"
              >
                Contact us
              </Link>

              {/* Enhanced decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-200/40 to-orange-300/30 rounded-full blur-xl animate-float" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-cream-300/50 to-cream-400/40 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-orange-100/30 to-orange-200/20 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
