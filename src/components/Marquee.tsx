"use client";
import React from "react";

// List of company logos as an array of image paths
const companyLogos = [
  "/marquee1.png", // Replace with actual image paths
  "/marquee2.png",
  "/marquee3.png",
  "/marquee4.png",
  "/marquee5.png",
  "/marquee6.png",
  "/marquee7.png",
  "/marquee8.png",
  "/marquee9.png",
  
  "/marquee1.png", // Replace with actual image paths
  "/marquee2.png",
  "/marquee3.png",
  "/marquee4.png",
  "/marquee5.png",
  "/marquee6.png",
  "/marquee7.png",
  "/marquee8.png",
  "/marquee9.png",
  // Add more logos as needed
];

const Marquee = () => {
  return (
    <div className="overflow-hidden py-4 md:p-20 p-10 h-15 m-5 md:m-20"> {/* Responsive padding for mobile and desktop */}
      {/* Marquee Container */}
      <div className="flex animate-marquee whitespace-nowrap md:px-8 px-4"> {/* Responsive horizontal padding */}
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="h-12 w-auto mx-4 md:h-16" // Smaller height for mobile, larger for desktop
          />
        ))}

        {/* Duplicate logos for continuous effect */}
        {companyLogos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company ${index + 1} (Duplicate)`}
            className="h-12 w-auto mx-4 md:h-16" // Responsive height for mobile
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite; /* Slower animation for smaller screens */
        }

        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 30s linear infinite; /* Faster animation for larger screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
