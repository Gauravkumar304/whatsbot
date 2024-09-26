import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareWhatsapp, faFacebookMessenger, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
            Experience 24/7 assistance with our WhatsApp Bot, offering personalized responses and efficient solutions tailored to your needs!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  About
                </a>
              </li>
              {/* <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Products
                </a>
              </li> */}
              <li className="mb-2">
                <a href="#" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:underline">
              <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" className="text-green-500" /> Facebook
              </a>
              <a href="#" className="text-sm hover:underline">
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" className="text-pink-500" /> Twitter
              </a>
              <a href="#" className="text-sm hover:underline">
              <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="text-blue-600" /> Instagram
              </a>
              <a href="#" className="text-sm hover:underline">
              <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500" /> Youtube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">&copy; 2024 WhatsappBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
