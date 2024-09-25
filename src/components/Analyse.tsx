"use client";
import React from "react";

const Analyse: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-10 bg-white">
      {/* Left Side: Text Section */}
      <div className="lg:w-1/2 w-full text-left">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="underline decoration-blue-400">Analyse</span>
          <br />
          <span className="text-blue-500">Core Metrics</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Track important metrics, patterns, and download reports for detailed insights.
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600">
          Book Demo
        </button>
      </div>

      {/* Right Side: Image Section */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center">
        <img
          src="/path/to/graph-image.png"
          alt="Analytics Graph"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Analyse;
