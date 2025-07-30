import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import ikenseriesLogo from '@/assets/ikenseries-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={ikenseriesLogo} alt="IkenSeries" className="h-8 w-auto brightness-0 invert" />
            <p className="text-gray-300 text-sm">
              Transforming Ideas Into Reality. We specialize in full-stack software development, 
              digital marketing, and custom technology solutions for businesses in Nigeria and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary-accent cursor-pointer transition-smooth" />
              <Twitter className="h-5 w-5 hover:text-primary-accent cursor-pointer transition-smooth" />
              <Linkedin className="h-5 w-5 hover:text-primary-accent cursor-pointer transition-smooth" />
              <Instagram className="h-5 w-5 hover:text-primary-accent cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Software Development',
                'Digital Marketing',
                'Branding & Identity',
                'Cloud Integration',
                'SEO Services',
                'Custom ERP Systems',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Tech Hub Street, Victoria Island, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">+234 801 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@ikenseries.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} IkenSeries Consult Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary-accent text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary-accent text-sm transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;