"use client";
import React from "react";
import Image from "next/image"; // Make sure to import the Image component
import homeimg from "../app/assets/homepage_img.png";


const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8  ml-10">
      
      {/* Main Text on the left */}
        <div className="md:w-1/2 mb-4 p-8 mx-10 my-24">
        
            {/* Adjust width for larger screens */}
            <h1 className="text-black text-3xl font-bold">
            Conversational AI Chatbots to
            </h1>
            <h2 className=" text-blue-500 text-3xl font-bold">
            Acquire, Engage & Support
            </h2>
            <h2 className="text-blue-500 text-3xl font-bold">
              Customers.</h2>
            <p className="text-base mb-4">
            Dynamic chatbots, Tailored solutions, Affordable pricing.
            </p>
            <div className="flex space-x-4 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold">
                Book Demo
            </button>
            <button className="text-blue-500 px-4 py-2 rounded border border-blue-500 hover:bg-blue-200 font-bold">
                Free Trial
            </button>
            
            </div>
            <p className="text-sm text-gray-500">
            *14 days Free Trial* No Credit Card Required
            </p>
        
        </div>
      {/* Image on the right */}
      <div className="md:w-1/2 flex justify-center md:justify-end mr-10 pt-20">
        
        {/* Align to the right */}
        <Image
          src={homeimg} // Update with your image path
          alt="Description of the image"
          width={500} // Adjust the width as needed
          height={800} // Adjust the height as needed
          className="object-contain w-full md:w-auto " // Responsive classes
        />{" "}
      </div>
     
    </div>
  );
};

export default Home;
