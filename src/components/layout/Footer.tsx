
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-50 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-primary">ALPHA</span> <span className="text-orange-600">ORANGE</span>
            </div>
            <p className="text-sm">
              Preferred Telecommunication Infrastructure Provider
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>03-58858550</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@alphaorange.com.my" className="hover:text-primary transition-colors">
                info@alphaorange.com.my
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#what-we-do" className="text-sm hover:text-primary transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-sm hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/#licenses" className="text-sm hover:text-primary transition-colors">
                  Licenses
                </Link>
              </li>
              <li>
                <Link to="/#landowners" className="text-sm hover:text-primary transition-colors">
                  For Landowners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rao" className="text-sm hover:text-primary transition-colors">
                  RAO
                </Link>
              </li>
              <li>
                <Link to="/csr" className="text-sm hover:text-primary transition-colors">
                  CSR
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/grievance" className="text-sm hover:text-primary transition-colors">
                  Grievance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Headquarters</h3>
            <div className="flex gap-2">
              <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
              <p className="text-sm">
                No.27 & 27-01, Jalan Snuker 13/28, Seksyen 13, 40100 Shah Alam, Selangor
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-orange-200 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              © {currentYear} Alpha Orange Sdn Bhd. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
