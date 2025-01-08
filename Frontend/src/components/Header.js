import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="assets/logo.png" alt="Bitrade Logo" className="h-8 mr-2" /> {/* Replace with actual logo image */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/About" className="block hover:text-green-500">About</Link>
          <Link to="/Services" className="hover:text-green-500">Services</Link>
          
          <Link to="/Blogs" className="hover:text-green-500">Blogs</Link>
          <Link to="/Contact" className="hover:text-green-500">Contact</Link>
        </nav>

        {/* Join Now Button */}
        <Link to="/Login" className="hidden md:block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-lg space-y-4 p-4 text-center">
          <Link to="/" className="block hover:text-green-500">Home</Link>
          <Link to="/About" className="block hover:text-green-500">About</Link>
          <Link to="/Services" className="block hover:text-green-500">Services</Link>
          
          <Link to="/Blogs" className="block hover:text-green-500">Blogs</Link>
          <Link to="/Tontact" className="block hover:text-green-500">Contact</Link>
          <Link to="/Login" className="block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
