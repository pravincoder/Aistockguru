import React from 'react';
import { FaRobot, FaChartLine, FaNewspaper, FaBitcoin, FaExchangeAlt, FaBell } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8 ">Services We Offer</h3>
        <p className="text-gray-400 mb-12">
          Explore our diverse range of services tailored to support your trading experience.
        </p>
        
        <div className="grid gap-8 md:grid-cols-3 pl-20 pr-20 ">
          {/* Service Card 1 */}
          <div className="p-6 h-64 bg-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaRobot className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Flexible Social Assistant</h4>
            <p className="text-gray-300">A customizable AI assistant to help manage your trades effectively.</p>
          </div>

          {/* Service Card 2 */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaChartLine className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Modules for Smart Trading</h4>
            <p className="text-gray-300">Enhance your trading strategy using our smart trading modules.</p>
          </div>

          {/* Service Card 3 */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaNewspaper className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Important News Analysis</h4>
            <p className="text-gray-300">Stay informed with essential news insights for trading success.</p>
          </div>

          {/* Service Card 4 */}
          <div className="p-6 h-64 bg-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaBitcoin className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Cryptocurrency Platform</h4>
            <p className="text-gray-300">Trade securely with our fully integrated cryptocurrency platform.</p>
          </div>

          {/* Service Card 5 */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaExchangeAlt className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Changes to Exchange Orders</h4>
            <p className="text-gray-300">Seamlessly update and manage exchange orders with ease.</p>
          </div>

          {/* Service Card 6 */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:ring-1 ring-green-500 hover:text-green-500 shadow-cyan-500/50">
            <FaBell className="text-green-500 text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Price Notification Module</h4>
            <p className="text-gray-300 ">Receive instant alerts on important price changes and trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
