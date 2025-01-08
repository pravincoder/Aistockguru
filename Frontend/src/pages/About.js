import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            About Us
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Learn more about who we are and our mission.
          </p>
        </div>

        {/* Dark Overlay for Video */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-50"></div>
      </section>

      {/* Meet Our Company Section */}
      <section className="flex flex-col md:flex-row justify-center py-16 px-6 bg-gray-900">
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <img
            src="/assets/img4.png"
            alt="Company"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/5 md:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="mt-4 text-white text-base md:text-base">
            This AI-powered stock analysis system offers real-time insights by
            integrating multiple specialized agents for technical, fundamental,
            sentiment, and predictive analytics. Using advanced machine learning
            and natural language processing,delivers comprehensive,actionable 
            insights for investors.
            With the rise in individual investors buying stocks via smartphones, 
            this system is especially valuable for both beginners and seasoned 
            traders, bridging the  knowledge and enhancing investment decisions.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-400 mt-4 text-lg">
            Our team of experts dedicated to your success
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg shadow-lg p-6 shadow-green-500/60 transform transition-transform hover:scale-105 hover:ring-1 ring-yellow-500">
              <img
                src="/assets/photo.png"
                alt="John Doe"
                className="w-32 h-40 md:w-36 md:h-48 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">Vivek Maurya</h3>
                <p className="text-blue-600 text-lg mt-2">
                  Specialization:{" "}
                  <span className="text-red-500">MERN Stack Developer</span>
                </p>
                <p className="text-green-500 mt-2 text-lg">
                MERN Stack Developer, building dynamic web applications. Proficient in MongoDB, Express.js, React.js, and Node.js. Experienced in full-stack development and delivering robust solutions.
                </p>
                <div className="flex space-x-4 mt-4 justify-center md:justify-start text-2xl">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    <i className="fab fa-linkedin hover:scale-105"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500"
                  >
                    <i className="fab fa-instagram hover:scale-105"></i>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="fab fa-github hover:scale-105"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg shadow-lg p-6 shadow-green-500/60 transform transition-transform hover:scale-105 hover:ring-1 ring-yellow-500">
              <img
                src="/assets/photo.png"
                alt="Jane Smith"
                className="w-32 h-40 md:w-36 md:h-48 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">Pravin Maurya</h3>
                <p className="text-blue-600 text-lg mt-2">
                  Specialization:{" "}
                  <span className="text-red-500">
                    Python Developer, Machine Learning
                  </span>
                </p>
                <p className="text-green-500 mt-2 text-lg">
                Python Developer specializing in Machine Learning, skilled in data analysis, model building, and deploying AI-powered solutions.
                </p>
                <div className="flex space-x-4 mt-4 justify-center md:justify-start text-2xl">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    <i className="fab fa-linkedin hover:scale-105"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500"
                  >
                    <i className="fab fa-instagram hover:scale-105"></i>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="fab fa-github hover:scale-105"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg shadow-lg p-6 shadow-green-500/60 transform transition-transform hover:scale-105 hover:ring-1 ring-yellow-500 ">
              <img
                src="/assets/vishal.jpg"
                alt="Vishal Gupta"
                className="w-32 h-40 md:w-36 md:h-48 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">Vishal Gupta</h3>
                <p className="text-blue-600 text-lg mt-2">
                  Specialization:{" "}
                  <span className="text-red-500">Android Developer</span>
                </p>
                <p className="text-green-500 mt-2 text-lg">
                A dedicated Android developer with a passion for crafting innovative and user-friendly mobile applications. Skilled in leveraging the latest Android technologies to build efficient apps.
                </p>
                <div className="flex space-x-4 mt-4 justify-center md:justify-start text-2xl ">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 "
                  >
                    <i className="fab fa-linkedin hover:scale-105"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500"
                  >
                    <i className="fab fa-instagram hover:scale-105"></i>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="fab fa-github hover:scale-105"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg shadow-lg p-6 shadow-green-500/60 transform transition-transform hover:scale-105 hover:ring-1 ring-yellow-500">
              <img
                src="/assets/nehal.jpg"
                alt="Nehal Kholipaka"
                className="w-32 h-40 md:w-36 md:h-48 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white">
                  Nehal Kholipaka
                </h3>
                <p className="text-blue-600 text-lg mt-2">
                  Specialization:{" "}
                  <span className="text-red-500">Python Developer</span>
                </p>
                <p className="text-green-500 mt-2 text-lg">
                Python developer, proficient in crafting efficient and scalable solutions. Experienced in data science, machine learning, and web development.
                </p>
                <div className="flex space-x-4 mt-4 justify-center md:justify-start text-2xl">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    <i className="fab fa-linkedin hover:scale-105"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500"
                  >
                    <i className="fab fa-instagram hover:scale-105"></i>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <i className="fab fa-github hover:scale-105"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
