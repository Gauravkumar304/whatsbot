import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCircleCheck, faGear } from "@fortawesome/free-solid-svg-icons";

import feature1 from '../app/assets/feature1.png';
import feature3 from '../app/assets/feature3.jpg';

const Feature: React.FC = () => {
  return (
    <div className="py-8 px-4 lg:px-8 bg-white max-w-screen-lg mx-auto md:pt-8 pt-0">
      {/* Top Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          Feature Rich <span className="text-blue-500">WhatsApp Chatbot</span>
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          All the features you need for seamless workflows and to achieve your business goals.
        </p>
      </div>

      {/* Feature Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          {/* Feature 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md  flex flex-col justify-start ">
            <Image
              src={feature1}
              alt="Security"
              className="h-auto w-full rounded-lg object-contain mb-2" // Adjusted size and width
            />
            <p className="text-sm font-bold p-2 text-left">Automated WhatsApp Follow-ups</p>
            <p className="text-gray-600 text-sm p-2">Effortless Follow-ups with Automated WhatsApp method.</p>
          </div>


           {/* Feature 8 */}
           <div className="relative flex justify-center items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="absolute top-2 left-2 bg-orange-100 p-2 rounded-full">
              <FontAwesomeIcon icon={faLanguage} className='h-6  text-orange-400' />
            </div>
            <h3 className="text-sm font-bold mb-2 p-4">Multilingual Capability</h3>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col space-y-4 py-12">
          {/* Feature 1 */}
          <div className="relative bg-gray-50 p-4 rounded-lg shadow-md ">
            <div className="flex flex-col items-center">
              <div className="bg-red-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faCircleCheck} className='h-6 text-red-500' />
              </div> </div>
              <div className='flex flex-col'>
              <p className="mt-4 text-sm font-bold mb-1">WhatsApp OTP Validation</p>
              <p className="text-gray-600 text-sm">WhatsApp Authentication via OTP for Security.</p>
            </div>
          </div>

          {/* Feature 3 (Book Demo) */}
          <div className="bg-blue-500 p-4 rounded-lg shadow-md text-center text-white">
            <h3 className="text-sm font-bold mb-2">See more of what we can do for your business</h3>
            <button className="px-3 py-1 bg-white text-blue-500 rounded-full font-bold shadow-md hover:bg-gray-100">
              Book Demo Now
            </button>
          </div>

         
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
           {/* Feature 9 */}
           <div className="bg-gray-50 p- rounded-lg shadow-md text-center">
            <Image
              src={feature3}
              alt="Multilingual Capability"
              className="h-15 w-full rounded-lg object-cover mb-2" // Adjusted size and width
            />
            <h4 className="text-sm font-bold mb-1">High Security with Data Masking</h4>
          </div>

          

          {/* Feature 6 */}
          <div className="relative bg-gray-50 p-4 rounded-lg shadow-md ">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faGear} className='h-6 text-blue-400' />
              </div> </div>
              <div className='flex flex-col'>
              <h3 className="mt-4 text-base font-bold mb-1">Condition-Based Conversations</h3>
              <p className="text-gray-600 text-sm">Tailored responses triggered by specific criteria or user actions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
