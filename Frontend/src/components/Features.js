import React from 'react';
import { FaChartLine, FaHeadset, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8 ">Features We Have</h3>
        
        <p className="mb-12 text-gray-400">
          Bitrade offers a full spectrum of features to help you trade freely and securely with minimal fees.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50 ">
            <FaChartLine className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2 text-red-400 ">Real-Time Market Data</h4>
            <p className="text-gray-400">
              Stay updated with the latest market trends to make informed trading decisions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50">
            <FaHeadset className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2 text-red-400">Customer Support</h4>
            <p className="text-gray-400">
              24/7 customer support to assist you with your trading needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center  hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50">
            <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2 text-red-400">Higher Security</h4>
            <p className="text-gray-400">
              Protecting your assets with robust security measures and encryption.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50">
            <FaMoneyBillWave className="text-4xl text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2 text-red-400">Lower Commissions</h4>
            <p className="text-gray-400">
              Enjoy lower commissions and maximize your trading returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
