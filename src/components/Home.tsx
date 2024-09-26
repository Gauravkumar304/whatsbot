"use client";
import React from "react";
import Image from "next/image";
import homeimg from "../app/assets/home_page.png"; // Replace this with the actual path

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 pt-8 md:p-8 md:ml-10">
      {/* Main Text on the left for large screens, center-aligned on mobile */}
      <div className="md:w-1/2 w-full mb-4 p-4 md:p-8 mx-4 md:mx-10 my-8 md:my-24">
        <div className="text-center md:text-left ">
          <h1 className="text-black pt-10 md:pt-20 text-2xl md:text-3xl font-bold">
            Conversational AI Chatbots to
          </h1>
          <h2 className="text-blue-500 text-2xl md:text-3xl font-bold">
            Acquire, Engage & Support
          </h2>
          <h2 className="text-blue-500 text-2xl md:text-3xl font-bold">Customers.</h2>
          <p className="text-sm md:text-base mb-4">
            Dynamic chatbots, Tailored solutions, Affordable pricing.
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
      <div className="md:w-1/2 w-full flex justify-center md:justify-end pt-8 md:pt-20">
        <Image
          src={homeimg}
          alt="Description of the image"
         // width={500} // Adjust width for large screens
          //height={800} // Adjust height for large screens
          className="object-contain w-full md:w-auto " // Ensure the image is responsive
        />
      </div>
    </div>
  );
};

export default Home;
