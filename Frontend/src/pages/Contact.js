import React, { useState } from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Clear the success message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-10">
      {/* Header Section */}
      <div 
        className="w-full p-10 text-center bg-cover bg-center" 
        style={{
          backgroundImage: "url('/assets/contact.png')",
          backgroundSize: "cover",              
          backgroundPosition: "center",           
          backgroundRepeat: "no-repeat", 
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)"  
        }}
      >
        <h1 className="text-4xl text-white font-semibold">Contact Us</h1>
        <p className="text-white mt-2">Home / Contact</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden mt-8 mx-auto">
        
        {/* Left Side - Contact Information */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Let’s <span className="text-blue-600">Get In Touch</span> With Us
          </h2>
          <p className="text-gray-600 mb-6">We're here to help and answer any question you might have.</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6">
            <button className="p-3 bg-gray-100 rounded-full text-green-600">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="p-3 bg-gray-100 rounded-full text-green-600">
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button className="p-3 bg-gray-100 rounded-full text-green-600">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="p-3 bg-gray-100 rounded-full text-green-600">
              <i className="fab fa-youtube"></i>
            </button>
            <button className="p-3 bg-gray-100 rounded-full text-green-600">
              <i className="fab fa-twitter"></i>
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-600">
              <i className="fas fa-phone-alt text-blue-600"></i>
              <div>
              <a href="tel:+910000000000" class="phone-link">+91 0000000000</a>

              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <i className="fas fa-envelope text-blue-600"></i>
              <div>
              <a href="mailto:Stockguruai@gmail.com" class="email-link">Stockguruai@gmail.com</a>

              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              <div>
                <p>Mumbai, Borivali</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-50 p-10">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Contact Us Now
            </button>
          </form>

          {/* Success Message */}
          {formSubmitted && (
            <p className="text-green-600 text-center mt-4 font-semibold">
              Submitted! We will contact you soon.
            </p>
          )}
        </div>
      </div>
      
      {/* Footer outside the main content to take full width */}
      <Footer className="w-full" />
    </div>
  );
}

export default Contact;
