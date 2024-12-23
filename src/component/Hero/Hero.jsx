import React from "react";

const Hero = () => {
  return (
    <div className="bg-gray-50 text-center py-12 px-6 lg:px-16">
      {/* Title Section */}
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
        Beautiful analytics to grow smarter
      </h1>
      <p className="text-lg lg:text-xl text-gray-600 mt-4">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition-all">
          Sign Up
        </button>
        <button className="border border-purple-600 text-purple-600 hover:bg-purple-100 px-6 py-2 rounded-lg shadow-md transition-all">
          Demo
        </button>
      </div>

      {/* Image */}
      <div className="mt-8">
        <img
          src="/path-to-hero-image.png"
          alt="Analytics Dashboard"
          className="mx-auto max-w-full lg:max-w-4xl"
        />
      </div>
    </div>
  );
};

export default Hero;
