"use client";
import React from "react";

// List of company logos as an array of image paths
const companyLogos = [
  "/marquee1.png",
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
      {/* Duplicate the logos to create a seamless circular scrolling effect */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...companyLogos, ...companyLogos].map((logo, index) => (
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
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
