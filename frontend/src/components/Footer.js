import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-white">CampusLink</h3>
            <p className="text-sm text-neutral-400">
              Empowering students with quality education and innovation for a brighter future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-neutral-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/facilities" className="text-neutral-400 hover:text-primary transition-colors">Facilities</Link></li>
              <li><Link to="/faculty" className="text-neutral-400 hover:text-primary transition-colors">Faculty</Link></li>
              <li><Link to="/admissions" className="text-neutral-400 hover:text-primary transition-colors">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/login" className="text-neutral-400 hover:text-primary transition-colors">Parent Portal</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span className="text-neutral-400">123 Education Street, City, State 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-neutral-400">info@campuslink.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} CampusLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;