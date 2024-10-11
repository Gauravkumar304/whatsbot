"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

// Correctly typing the debounce function
const debounce = (func: (entries: IntersectionObserverEntry[]) => void, delay: number) => {
  let timeout: NodeJS.Timeout; // Type for setTimeout in Node.js environment
  return (...args: [IntersectionObserverEntry[]]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default function Aboutvideo() {
  const [isMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      }, 100), // Add a 100ms debounce to reduce frequent triggering
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
    <div
      ref={videoRef}
      className={`relative w-full h-auto min-h-[50vh] md:h-[70vh] flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} p-0 m-0`}
    >
      <motion.div
        className={`w-full max-w-[90vw] md:max-w-4xl p-0 m-0`}
        initial={{ transform: 'scale(0)' }}
        animate={{ transform: isVisible ? 'scale(1)' : 'scale(0)' }}
        transition={{ duration: 0.5 }} // Reduced duration for smoother animation
      >
        {/* Video Element */}
        <video
          className="w-full h-auto max-h-[50vh] md:max-h-[70vh] object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted={isMuted}
          controls
          preload="none" // Lazy loading the video
        >
          <source src="/Aboutvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}
