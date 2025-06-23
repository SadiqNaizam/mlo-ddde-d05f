import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yellow-200 text-gray-800 py-10" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-blue-800">Visit Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <MapPin className="h-5 w-5 text-red-500" />
            123 Gadget Lane, Tokyo, Japan
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Clock className="h-5 w-5 text-red-500" />
            Open Daily: 11:00 AM - 9:00 PM
          </p>
           <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="h-5 w-5 text-red-500" />
            +1 (23) 456-7890
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3 text-blue-800">Follow the Fun</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Link to="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-500 transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link to="#" aria-label="Instagram" className="text-gray-600 hover:text-pink-500 transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link to="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-700 transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="md:col-span-3 text-center mt-8 border-t border-yellow-300 pt-6">
           <p className="text-sm">
            &copy; {currentYear} Dora-Eats. All rights reserved.
          </p>
          <p className="text-xs mt-1">
            Inspired by the wonderful world of Doraemon.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;