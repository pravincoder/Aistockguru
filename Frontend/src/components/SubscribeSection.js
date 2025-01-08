// src/components/SubscribeSection.js
import React, { useState } from 'react';

const SubscribeSection = () => {
  const [isSubscribed, setIsSubscribed] = useState(false); // State to manage subscription status

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubscribed(true); // Update the state to show the subscription message
  };

  return (
    <section className="bg-gray-800 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Box Container */}
        <div className="bg-green-400 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center justify-between w-full max-w-2xl h-auto md:h-60">
          {/* Image */}
          <div className="mb-6 md:mb-0 flex-shrink-0">
            <img
              src="assets/sub.png" // Replace with your image URL
              alt="Subscribe Illustration"
              className="w-32 h-32 md:w-40 md:h-40 object-cover"
            />
          </div>

          {/* Text and Form */}
          <div className="text-center md:text-left flex-1 md:ml-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Subscribe Our News</h2>
            <p className="mb-4 text-black">Stay updated on the latest news in trading and finance. Subscribe now and never miss an update!</p>

            {/* Subscription Form */}
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex items-center justify-center md:justify-start gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                  Submit
                </button>
              </form>
            ) : (
              <p className="text-lg font-semibold text-black">You have successfully subscribed!</p> // Success message
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
