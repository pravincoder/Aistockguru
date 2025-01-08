import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 mt-10">
      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden ">
        {/* Left Side with Background Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/img4.png')" }}
        ></div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 p-8 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Register
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Id elementum in sit id eu
            iaculis.
          </p>

          <div className="flex space-x-4 mb-6">
            <button className="p-3 bg-gray-100 rounded-full">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </button>
            <button className="p-3 bg-gray-100 rounded-full">
              <i className="fab fa-twitter text-blue-400"></i>
            </button>
            <button className="p-3 bg-gray-100 rounded-full">
              <i className="fab fa-instagram text-pink-500"></i>
            </button>
            <button className="p-3 bg-gray-100 rounded-full">
              <i className="fab fa-linkedin-in text-blue-700"></i>
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Or use your email to create an account
          </p>

          {/* First Name and Last Name in a single row */}
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
