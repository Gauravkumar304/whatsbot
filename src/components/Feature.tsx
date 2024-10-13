"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCircleCheck, faGear } from "@fortawesome/free-solid-svg-icons";

import feature1 from '../app/assets/feature1.png';
import feature3 from '../app/assets/feature3.jpg';

const Feature: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when not intersecting
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the heading is visible
    );

    // Store current refs to prevent the warning about stale values
    const currentHeadingRef = headingRef.current;
    const currentParagraphRef = paragraphRef.current;

    if (currentHeadingRef) {
      observer.observe(currentHeadingRef);
    }

    if (currentParagraphRef) {
      observer.observe(currentParagraphRef);
    }

    return () => {
      if (currentHeadingRef) {
        observer.unobserve(currentHeadingRef);
      }
      if (currentParagraphRef) {
        observer.unobserve(currentParagraphRef);
      }
    };
  }, []);

  return (
    <div className="py-8 px-4 lg:px-8 bg-white max-w-screen-lg mx-auto md:pt-8 pt-0">
      {/* Top Heading Section */}
      <div className="text-center mb-8">
        <h1
          ref={headingRef}
          className={`text-2xl md:text-3xl font-bold transition-transform duration-700 transform ${isVisible ? 'scale-105 opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Feature Rich <span className="text-green-500">WhatsApp Chatbot</span>
        </h1>
        <p
          ref={paragraphRef}
          className={`mt-2 text-sm md:text-base text-gray-600 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '500ms' }}
        >
          All the features you need for seamless workflows and to achieve your business goals.
        </p>
      </div>

      {/* Feature Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          {/* Feature 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md flex flex-col justify-start transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <Image
              src={feature1}
              alt="Security"
              className="h-auto w-full rounded-lg object-contain mb-2"
            />
            <p className="text-sm font-bold p-2 text-left">Automated WhatsApp Follow-ups</p>
            <p className="text-gray-600 text-sm p-2">Effortless Follow-ups with Automated WhatsApp method.</p>
          </div>

          {/* Feature 8 */}
          <div className="relative flex justify-center items-center bg-gray-50 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="absolute top-2 left-2 bg-orange-100 p-2 rounded-full">
              <FontAwesomeIcon icon={faLanguage} className='h-6 text-orange-400' />
            </div>
            <h3 className="text-sm font-bold mb-2 p-4">Multilingual Capability</h3>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col space-y-4 py-12">
          {/* Feature 1 */}
          <div className="relative bg-gray-50 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-red-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faCircleCheck} className='h-6 text-red-500' />
              </div>
            </div>
            <div className='flex flex-col'>
              <p className="mt-4 text-sm font-bold mb-1">WhatsApp OTP Validation</p>
              <p className="text-gray-600 text-sm">WhatsApp Authentication via OTP for Security.</p>
            </div>
          </div>

          {/* Feature 3 (Book Demo) */}
          <div className="bg-green-500 p-4 rounded-lg shadow-md text-center text-white transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-sm font-bold mb-2">See more of what we can do for your business</h3>
            <button className="px-3 py-1 bg-white text-green-500 rounded-full font-bold shadow-md hover:bg-gray-100">
              Book Demo Now
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          {/* Feature 9 */}
          <div className="bg-gray-50 rounded-lg shadow-md text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <Image
              src={feature3}
              alt="Multilingual Capability"
              className="h-15 w-full rounded-lg object-cover mb-2"
            />
            <h4 className="text-sm font-bold mb-1">High Security with Data Masking</h4>
          </div>

          {/* Feature 6 */}
          <div className="relative bg-gray-50 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-2 rounded-full">
                <FontAwesomeIcon icon={faGear} className='h-6 text-green-400' />
              </div>
            </div>
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
