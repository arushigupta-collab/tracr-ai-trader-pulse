import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import newLogo from '@/assets/new-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/#faq' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActive = (href: string) => {
    if (href === '/#faq') {
      return location.pathname === '/' && location.hash === '#faq';
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    if (href === '/#faq') {
      if (location.pathname === '/') {
        // Already on homepage, just scroll to FAQ
        const faqElement = document.getElementById('faq');
        if (faqElement) {
          faqElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      // If not on homepage, Link will handle navigation to /#faq
    }
  };

  // Handle scroll effect for background transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-lg' 
        : 'bg-background/40 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src={newLogo} 
                alt="Logo" 
                className="h-8 w-auto group-hover:scale-125 transition-all duration-700 group-hover:brightness-125 animate-fade-in group-hover:drop-shadow-2xl group-hover:rotate-3 cursor-pointer"
              />
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href === '/#faq' && location.pathname === '/' ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-primary group px-3 py-2 ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 origin-left rounded-full ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-primary group px-3 py-2 ${
                    isActive(item.href) ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 origin-left rounded-full ${
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/register">
              <Button 
                variant="default" 
                size="sm"
                className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Register Interest
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 text-foreground hover:text-primary hover:bg-transparent"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45 opacity-100' : 'rotate-0 opacity-100'}`}>
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
        }`}>
          <div className="bg-background/70 backdrop-blur-xl border border-border/30 rounded-lg mx-4 mt-2 shadow-xl overflow-hidden">
            <div className="py-4">
              {navigation.map((item, index) => (
                item.href === '/#faq' && location.pathname === '/' ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item.href);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left block px-6 py-3 text-lg font-medium transition-all duration-300 border-l-4 ${
                      isActive(item.href) 
                        ? 'text-primary border-primary bg-primary/5' 
                        : 'text-foreground/80 border-transparent hover:text-primary hover:border-primary/50 hover:bg-primary/5'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-6 py-3 text-lg font-medium transition-all duration-300 border-l-4 ${
                      isActive(item.href) 
                        ? 'text-primary border-primary bg-primary/5' 
                        : 'text-foreground/80 border-transparent hover:text-primary hover:border-primary/50 hover:bg-primary/5'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-6 pt-4 pb-2">
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full bg-black hover:bg-gray-800 text-white font-medium"
                  >
                    Register Interest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;