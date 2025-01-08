import React from "react";
import AboutSection from "../components/AboutSection";
import Features from "../components/Features";
import PlatformInfo from "../components/PlatformInfo";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import ProTraderArticles from "../components/ProTraderArticles";
import SubscribeSection from "../components/SubscribeSection";
import Footer from "../components/Footer";


import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-gray-900 text-white ">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-40 px-3">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Invest Your Money <br />
            With <span className="text-green-500">Higher Return</span>
          </h1>
          <p className="text-lg mb-8">
            Anyone can invest money in different currency to increase their
            earnings by the help of trading through online.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
      {/* Get Started Button */}
      <Link to="/https://filehippo.com/">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </Link>

      {/* Watch Video Button */}
      <a href="https://www.example.com/video-url" target="_blank" rel="noopener noreferrer">
        <button className="border border-gray-400 text-white px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600">
          Watch Video
        </button>
      </a>
    </div>
          <div className="mt-8 flex justify-center md:justify-start space-x-10">
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="text-2xl hover:text-green-500"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="text-2xl hover:text-green-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com"
              aria-label="YouTube"
              className="text-2xl hover:text-green-500"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Twitter"
              className="text-2xl hover:text-green-500"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="assets/img3.png"
            alt="Hero"
            className="w-full md:w-4/5 lg:w-5/5"
          />
        </div>
      </div>
      <PlatformInfo/>
      
      <Features/>
      <AboutSection />
      <Services/>
      <FAQ/>
      <ProTraderArticles/>
      <SubscribeSection/>
      <Footer />
      
     
    </section>
  );
};

export default Home;
