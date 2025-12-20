import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import WhatsAppIcon from '../Icons/WhatsAppIcon';
import { WHATSAPP_DISPLAY, EMAIL_CONTACT, WHATSAPP_NUMBER } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logos/logo-white.png" alt="Research Mate Logo" className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for academic excellence. We provide professional guidance for research, data analysis, and assignments to help you succeed.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Services</Link></li>
              <li><Link to="/assignments" className="hover:text-brand-500 transition-colors">Class Assignments</Link></li>
              <li><Link to="/custom-request" className="hover:text-brand-500 transition-colors">Custom Requests</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-brand-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <WhatsAppIcon size={18} className="text-brand-500" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white transition-colors">{WHATSAPP_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500" />
                <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white transition-colors">{EMAIL_CONTACT}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-500" />
                <span>Accra, Ghana (Online Service)</span>
              </li>
            </ul>
          </div>

          {/* Legal/Disclaimer */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-heading">Ethical Policy</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Research Mate provides academic consulting, editing, and guidance. We do not support plagiarism or academic dishonesty. All materials are intended to serve as study aids and reference for your own original work.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2022 Research Mate. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;