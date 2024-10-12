"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import 'tailwindcss/tailwind.css';

const Dropoff: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Store current refs to prevent the warning about stale values
    const currentTextRef = textRef.current;
    const currentImageRef = imageRef.current;

    if (currentTextRef) observer.observe(currentTextRef);
    if (currentImageRef) observer.observe(currentImageRef);

    // Cleanup
    return () => {
      if (currentTextRef) observer.unobserve(currentTextRef);
      if (currentImageRef) observer.unobserve(currentImageRef);
    };
  }, []);

  return (
    <div className="flex justify-center items-center p-4 lg:p-20 font-poppins ">
      <div className="bg-white flex flex-col lg:flex-row items-center lg:space-x-12 p-6 rounded-lg shadow-lg w-full max-w-6xl">
        
        {/* Left Side Text Section */}
        <div
          ref={textRef}
          className={`lg:w-1/3 w-full text-center lg:text-left mb-6 lg:mb-0 flex flex-col justify-center transition-opacity duration-500 transform ${
            isVisible ? 'opacity-100 animate-fade-left' : 'opacity-0'
          }`}
        >
          <h1 className="text-[32px] font-bold mb-4 text-gray-800 leading-snug">
            Save your Drop-offs
          </h1>
          <p className="text-[16px] text-gray-600 mb-4 leading-relaxed">
            Recover Abandoned Carts, Application Drop-offs within minutes using WhatsApp Smart Notifications.
          </p>
          <p className="text-[16px] text-gray-600 mb-6 leading-relaxed">
            These Notifications have special CTA (Call-to-Action) Buttons that drive Engagement.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-[16px]">
            Start for FREE
          </button>
        </div>

        {/* Right Side Image Section */}
        <div
          ref={imageRef}
          className={`lg:w-2/3 w-full flex justify-center transition-opacity duration-500 transform ${
            isVisible ? 'opacity-100 animate-fade-right' : 'opacity-0'
          }`}
        >
          <div className="relative">
            <Image // Use Next.js Image component
              src="/dropoff.png"
              alt="Mobile Screen"
              className="max-w-xs w-full rounded-lg shadow-lg lg:max-w-lg"
              width={500} // Specify image dimensions
              height={300} // Specify image dimensions
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dropoff;
