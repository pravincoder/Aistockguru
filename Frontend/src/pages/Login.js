import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="flex max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side with Background Image */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center" 
             style={{ backgroundImage: "url('/assets/img4.png')" }}>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Log In</h2>
          
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
          {/* Social Media Icons */}
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

          <p className="text-gray-600 text-sm mb-4">Or use your email to create an account</p>
          
          {/* Login Form */}
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
          
          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/" className="text-sm text-green-500 hover:underline">Forgot Password</a>
          </div>
          
          {/* Sign In Button */}
          <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Sign In
          </button>
          
          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account yet? <Link to="/register" className="text-green-500 hover:underline">Sign Up</Link>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
