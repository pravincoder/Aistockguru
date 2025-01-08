import React from 'react';
import { FaRobot, FaChartLine, FaNewspaper, FaBitcoin, FaExchangeAlt, FaBell } from 'react-icons/fa';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Video Section with About Us Overlay */}
      <section className="relative flex items-center justify-center w-full h-[50vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* About Us Text Overlay */}
        <div className="relative z-10 text-center px-4 md:px-8">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-semibold">
            Services
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Find here same osm services .
          </p>
        </div>

        {/* Dark Overlay for Video */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-50"></div>
      </section>
    
      <section id="services" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8 ">Services We Offer</h3>
        <p className="text-gray-400 mb-12">
          Explore our diverse range of services tailored to support your trading experience.
        </p>
        
        <div className="grid gap-8 md:grid-cols-3 pl-20 pr-20 ">
          {/* Service Card 1 */}
          <div className="p-6 h-64 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaRobot className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Flexible Social Assistant</h4>
            <p className="text-gray-300">A customizable AI assistant to help manage your trades effectively.</p>
          </div>

          {/* Service Card 2 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaChartLine className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Modules for Smart Trading</h4>
            <p className="text-gray-300">Enhance your trading strategy using our smart trading modules.</p>
          </div>

          {/* Service Card 3 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaNewspaper className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Important News Analysis</h4>
            <p className="text-gray-300">Stay informed with essential news insights for trading success.</p>
          </div>

          {/* Service Card 4 */}
          <div className="p-6 h-64 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaBitcoin className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Cryptocurrency Platform</h4>
            <p className="text-gray-300">Trade securely with our fully integrated cryptocurrency platform.</p>
          </div>

          {/* Service Card 5 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaExchangeAlt className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Changes to Exchange Orders</h4>
            <p className="text-gray-300">Seamlessly update and manage exchange orders with ease.</p>
          </div>

          {/* Service Card 6 */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaBell className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Price Notification Module</h4>
            <p className="text-gray-300 ">Receive instant alerts on important price changes and trends.</p>
          </div>
        </div>
      </div>
    </section>
     

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
