import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Our Commitment To Help Growing Your Business</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Building a Better Trading Future
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Providing the Best Trading Experience
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> The Experts Behind Your Trading Success
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Empowering Traders Worldwide
            </li>
          </ul>
          <button className="bg-green-500 mt-6 px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition">
            Meet Our Experts
          </button>
        </div>

        {/* Right Side: Image and Stats */}
        <div className="md:w-1/2 flex justify-center">
  <div className="relative w-full"> {/* Ensure the container is full width */}
    <img
      src="assets/img4.png" // Ensure the image path is correct
      alt="Chart"
      className="w-full h-auto md:w-4/5 lg:w-3/5 mx-auto" // Responsive width and automatic height
    />
    <div className="absolute top-0 right-0 md:right-10 lg:right-20 bg-gray-700 bg-opacity-75 p-4 rounded-lg">
      <p className="text-lg font-semibold">90% Satisfied Clients</p>
      <div className="w-full bg-gray-600 h-2 rounded mt-2">
        <div className="bg-green-500 h-2 rounded" style={{ width: '90%' }}></div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutSection;
