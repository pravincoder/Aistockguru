// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handlePlaceholderClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 ">
            <h3 className="text-xl font-semibold text-white">Bitrade</h3>
            <p className="mt-4">
              Bitrade is your trusted partner in trading. We provide expert
              insights, advanced tools, and support for traders worldwide.
            </p>
            <div className="mt-4 flex space-x-4">
              {/* Social Icons */}
              <a href="/about" aria-label="Facebook" onClick={handlePlaceholderClick}>
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" onClick={handlePlaceholderClick}>
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" onClick={handlePlaceholderClick}>
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter" onClick={handlePlaceholderClick}>
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6 md:mb-0 ml-20">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">Contact</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">Blog</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/terms" className="hover:text-white">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="/help" className="hover:text-white">Help Center</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/careers" className="hover:text-white">Careers</a>
              </li>
              <li>
                <a href="/press" className="hover:text-white">Press</a>
              </li>
              <li>
                <a href="/partners" className="hover:text-white">Partners</a>
              </li>
              <li>
                <a href="/advertise" className="hover:text-white">Advertise</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2023 Bitrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
