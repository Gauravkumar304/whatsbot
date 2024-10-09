"use client";
import React from "react";
import Image from "next/image";
import homeimg from "../app/assets/home.webp"; // Replace this with the actual path

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 pt-8 md:p-8 md:ml-10">
      {/* Main Text on the left for large screens, center-aligned on mobile */}
      <div className="md:w-1/2 w-full mb-4 p-4 md:p-8 mx-4 md:mx-10 my-8 md:my-24">
        <div className="text-center md:text-left ">
          <h2 className="text-black pt-10 md:pt-20 text-2xl md:text-3xl font-bold">
          	Understand the differences between 
          </h2>
          <h2 className="text-blue-500 text-2xl md:text-3xl font-bold">
          Cloud API and Business API  {/* Acquire, Engage & Support  */} 
          </h2>

          {/* <h2 className="text-black pt- md:pt- text-2xl md:text-3xl font-bold">
          Prerequisites and step-by-step guide 
          </h2>
          <h2 className="text-blue-500 text-2xl md:text-3xl font-bold">
          for setting up WhatsApp Cloud API  
          </h2> */}
          {/* <h2 className="text-blue-500 text-2xl md:text-3xl font-bold"> Prerequisites and step-by-step guide for setting up WhatsApp Cloud API</h2> */}

          <p className="text-sm md:text-base mb">
          Prerequisites and step-by-step guide for setting up WhatsApp Cloud API 
          </p>
          <p className="text-sm md:text-base mb-4">
          Best practices and reasons to choose Pinggo for your API setup
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold">
              Book Demo
            </button>
            <button className="text-blue-500 px-4 py-2 rounded border border-blue-500 hover:bg-blue-200 font-bold">
              Free Trial
            </button>
          </div>
          <p className="text-xs md:text-sm text-blue-500 ">
            *14 days Free Trial* No Credit Card Required
          </p>
        </div>
      </div>

      {/* Image on the right for larger screens, below the text for mobile */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end pt-8 md:pt-28">
        <Image
          src={homeimg}
          alt="Description of the image"
         //width={500} // Adjust width for large screens
         //height={1000} // Adjust height for large screens
          className="object-contain  w-3/4 md:w-1/2 lg:w-[600px] h-auto " // w-full md:w-auto Ensure the image is responsive
        />
      </div>  
    </div>
  );
};

export default Home;
