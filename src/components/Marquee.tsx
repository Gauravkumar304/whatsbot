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
  // Add more logos as needed
];

const Marquee = () => {
  return (
    <div className="overflow-hidden py-4 p-20 h-15 m-20 "> {/* Added padding to top and bottom */}
      {/* Marquee Container */}
      <div className="flex animate-marquee whitespace-nowrap px-8 p-8 "> {/* Added horizontal padding */}
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="h-16 w-auto mx-4" // Adjust size as needed
          />
        ))}

        {/* Duplicate logos for continuous effect */}
        {companyLogos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo}
            alt={`Company ${index + 1} (Duplicate)`}
            className="h-16 w-auto mx-4 p-8" // Adjust size as needed
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
          animation: marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
