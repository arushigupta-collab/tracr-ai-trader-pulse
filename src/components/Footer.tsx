import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-white">
                tracr <span className="text-pantone-298">AI</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              See behind the trade. Cut out the noise and make decisions backed by data and insights, not emotions.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-pantone-298 hover:text-white transition-colors text-white/70"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-pantone-298 hover:text-white transition-colors text-white/70"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-pantone-298 hover:text-white transition-colors text-white/70"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-pantone-298 hover:text-white transition-colors text-white/70"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg hover:bg-pantone-298 hover:text-white transition-colors text-white/70"
                aria-label="X (formerly Twitter)"
              >
                <X className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pantone-298">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-pantone-298 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-pantone-298 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-pantone-298 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white/70 hover:text-pantone-298 transition-colors">
                  Register Interest
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pantone-298">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-white/70 hover:text-pantone-298 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/70 hover:text-pantone-298 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/70 hover:text-pantone-298 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-pantone-298 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2025 Tracr AI. All rights reserved.
          </p>
          <p className="text-white/70 text-sm mt-4 md:mt-0">
            Trading involves risk. Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;