import React from "react";
import { FaUsers, FaRegLightbulb, FaHeart } from "react-icons/fa"; // Import icons

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen w-full">
      {/* Full-Width Section */}
      <div className="w-full bg-white shadow-lg rounded-lg p-8 relative overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-pulse -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 animate-pulse -z-10"></div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900 text-center animate-fade-in-up">
          About Us
        </h1>

        {/* Introduction Section */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center animate-fade-in-up">
          Welcome to{" "}
          <span className="text-blue-600 font-semibold">Blogging App</span>! We
          are passionate about sharing knowledge and creating high-quality
          content to inspire and educate our readers.
        </p>

        {/* Three Columns with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 animate-fade-in-up">
          <div className="text-center transition-transform transform hover:scale-105 duration-300">
            <FaUsers className="text-blue-600 text-5xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Community
            </h2>
            <p className="text-gray-600">
              Join a community of like-minded individuals and share your
              knowledge.
            </p>
          </div>

          <div className="text-center transition-transform transform hover:scale-105 duration-300">
            <FaRegLightbulb className="text-yellow-500 text-5xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Inspiration
            </h2>
            <p className="text-gray-600">
              Find inspiration through well-researched and carefully crafted
              articles.
            </p>
          </div>

          <div className="text-center transition-transform transform hover:scale-105 duration-300">
            <FaHeart className="text-red-500 text-5xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Passion
            </h2>
            <p className="text-gray-600">
              Our writers are passionate about delivering high-quality, engaging
              content.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-10 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-bold text-blue-600">Blogging App</span>,
            our mission is to empower our readers with valuable information
            while fostering a space for creativity and growth. Whether you're
            looking to stay updated on the latest trends or expand your personal
            and professional horizons, we've got something for you.
          </p>
        </div>

        {/* Closing Section */}
        <p className="text-gray-700 text-lg leading-relaxed text-center animate-fade-in-up">
          Thank you for visiting{" "}
          <span className="text-blue-600 font-semibold">Blogging App</span>. We
          hope you enjoy reading our content as much as we enjoy creating it.
          Stay tuned for more exciting updates!
        </p>
      </div>
    </div>
  );
};

export default About;
