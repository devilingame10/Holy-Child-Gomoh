import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold">Holy Child School</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Gomoh's premier English medium school, dedicated to academic excellence and holistic development since our establishment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors" data-testid="footer-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" data-testid="footer-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" data-testid="footer-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" data-testid="footer-youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-white/80 hover:text-secondary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-white/80 hover:text-secondary transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="text-white/80 hover:text-secondary transition-colors">Facilities</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-secondary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/news" className="text-white/80 hover:text-secondary transition-colors">News & Events</Link></li>
              <li><Link to="/login" className="text-white/80 hover:text-secondary transition-colors">Parent Portal</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Downloads</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-white/80">Holy Child School, Main Road, Gomoh, Jharkhand 828401</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-white/80">+91-9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-white/80">info@holychildgomoh.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Holy Child School Gomoh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;