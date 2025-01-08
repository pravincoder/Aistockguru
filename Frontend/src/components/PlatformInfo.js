import React from 'react';


const PlatformInfo = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly bg-gray-800 text-white py-12 px-6 lg:px-16 ">
      
      {/* Left Side (Image/Graphic) */}
      <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 hover:-translate-y-1 hover:scale-110 duration-300">
         {/* Replace with your actual image/icon */}
        <img
            src="assets/info.png"
            alt="Hero"
            className="w-full md:w-4/5 lg:w-5/5 "
          />
      </div>

      {/* Right Side (Text Content) */}
      <div className="max-w-lg text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">Meet Our Platform to Know More About</h2>
        <p className="text-gray-300 mb-6">
          Our platform is designed to provide a seamless trading experience. With a focus on security, real-time data, and user-friendly features, we are committed to helping you grow your investment portfolio with ease.
        </p>
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default PlatformInfo;
