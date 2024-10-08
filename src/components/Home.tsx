"use client";
import React from "react";
import Image from "next/image";
import homeimg from "../app/assets/home.webp"; // Replace this with the actual path

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 pt-8 md:p-8">
      {/* Left Side: Main Text */}
<div className="md:w-1/2 w-full mb-4 p-4 md:p-6 mx-4 md:mx-8 my-6 md:my-20">
  <div className="text-center md:text-left">
    {/* Headings in one line, reduced text size for better fit */}
    <p className="text-black pt-8 md:pt-16 text-xl md:text-3xl font-bold font-poppins leading-tight">
      Understand the differences between
    </p>
    <p className="text-blue-500 text-xl mb-2 md:text-3xl font-bold font-poppins leading-tight">
      Cloud API and Business API
    </p>
    
    {/* Paragraphs adjusted for one line with reduced size */}
    <p className="text-xs md:text-base  font-poppins leading-tight">
      Prerequisites and step-by-step guide for setting up WhatsApp Cloud API
    </p>
    <p className="text-xs md:text-base mb-4 font-poppins leading-tight">
      Best practices and reasons to choose Pinggo for your API setup
    </p>
    
    {/* Button adjusted for better responsiveness */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold font-poppins">
        Book Demo
      </button>
    </div>
    
    {/* Small disclaimer text */}
    <p className="text-xs md:text-sm text-blue-500 font-poppins">
      *14 days Free Trial  <br /> * No Credit Card Required
    </p>
  </div>
</div>


      {/* Right Side: Image */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end pt-8 md:pt-28">
        <Image
          src={homeimg}
          alt="Home image description"
          className="object-contain w-full md:w-2/3 lg:w-[800px] h-auto" // Enlarging the image for all screens
        />
      </div>
    </div>
  );
};

export default Home;
