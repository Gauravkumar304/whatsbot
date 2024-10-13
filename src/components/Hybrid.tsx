"use client";
import React from "react";
import Image from "next/image";
import hybrid1 from '../app/assets/hybrid1.png';
import hybrid2 from '../app/assets/hybrid2.png';

const Hybrid: React.FC = () => {
  return (
    <div className="flex flex-col px-4 md:px-16 lg:px-32 pt-10 pb-10 bg-gray-50">
      {/* Heading Section */}
      <div className="mt-8 ml-4 text-left">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Hybrid AI Chatbot   <span className="text-green-500"> - Ai WhatsApp chatbot</span>   {/*  (Bot+Live Agent)     */}
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700">
          Use Pinggo to automate conversations, and easily <br /> switch to human agents for personalized help when <br className="hidden sm:inline" /> required.
        </p> 
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col md:flex-row justify-center items-center mt-8 w-full">
        {/* Left Side Large Chat Interface */}
        <div className="relative w-full md:w-3/4 ">
          <Image
            src={hybrid1}
            alt="Main Chat Interface"
            className="w-full h-auto  shadow-lg rounded-lg"     //md:h-96
          />
          
          {/* Right Side Smaller Interface (overlapping at the top right corner) */} 
          <div className="absolute   top-20 right-20 transform  md:translate-x-1/2 -translate-y-1/2 ">     {/*md:translate-x-1/2 -translate-y-1/2 */}
            <Image
              src={hybrid2}
              alt="Mobile Chat Interface 1"
              className="w-40 sm:w-56 md:w-96 h-auto shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hybrid;
