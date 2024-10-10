"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

export default function Aboutvideo() {
  const [isMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

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
    <div ref={videoRef} className={`relative w-full h-auto min-h-[50vh] md:h-[70vh] flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} p-0 m-0`}>
      <motion.div
        className={`w-full max-w-[90vw] md:max-w-4xl ${isVisible ? 'animate-scaleUp' : ''} p-0 m-0`}
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {/* Video Element */}
        <video
          className="w-full h-auto max-h-[50vh] md:max-h-[70vh] object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted={isMuted}
          controls
        >
          <source src="/Aboutvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}
