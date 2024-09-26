"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

export default function Aboutvideo() {
  const [isMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  // Function to toggle mute state
  // const toggleMute = () => {
  //   setIsMuted(!isMuted);
  // };

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className={` flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div
        className={` flex flex-col items-center justify-center ${isVisible ? 'animate-scaleUp' : ''}`} // Applying scaleUp animation when page is visible
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Video Element */}
        <video
          className="w-2/3 max-w-10xl h-auto rounded-lg shadow-lg z-10"
          autoPlay
          loop
          muted={isMuted} // Video starts muted
          controls
        >
          <source src="/Smatbot+Product+Demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mute/Unmute Button */}
        {/* <button
          onClick={toggleMute}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 z-10"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button> */}
      </motion.div> 
    </div>
  );
}
