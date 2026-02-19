import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <div className="text-2xl font-heading font-bold text-primary">
              Holy Child School
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : scrolled ? 'text-slate-600 hover:text-primary' : 'text-white hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {token ? (
              <>
                <Link to="/dashboard" data-testid="nav-dashboard">
                  <Button variant="ghost" className="rounded-full">
                    Portal
                  </Button>
                </Link>
                <Button onClick={handleLogout} variant="outline" className="rounded-full" data-testid="logout-button">
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" data-testid="nav-login">
                <Button className="h-10 px-6 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-md">
                  Parent Portal
                </Button>
              </Link>
            )}
          </div>

          <button
            className={`lg:hidden p-2 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {token ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block">
                  <Button variant="ghost" className="w-full rounded-full">
                    Portal
                  </Button>
                </Link>
                <Button onClick={handleLogout} variant="outline" className="w-full rounded-full">
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className="block">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full">
                  Parent Portal
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;