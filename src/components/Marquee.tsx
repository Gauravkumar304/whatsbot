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
];

const Marquee = () => {
  return (
    <div className="overflow-hidden py-4 md:p-0 p-10 h-15 m-5 md:m-20">
      {/* 
        Using the same container for the animation without manually duplicating the logos. 
        The animation is set up to loop continuously without jumps. 
      */}
      <div className="flex animate-marquee whitespace-nowrap">
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="h-12 w-auto mx-4 md:h-16"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0); /* Start at the original position */
          }
          100% {
            transform: translateX(-100%); /* Move all the way to the left */
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite; /* Smooth linear animation */
        }

        /* 
          Problem: The animation was jumping because of manual duplication in JSX. 
          Solution: Use keyframes to achieve a continuous scrolling effect and avoid manual duplication. 
        */
      `}</style>
    </div>
  );
};

export default Marquee;
