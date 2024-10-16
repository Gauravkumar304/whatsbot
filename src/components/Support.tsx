"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import hometextdesign from "../app/assets/hometextdesign.png"

const Support: React.FC = () => {
  // Create refs for each section
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideIn");
          } else {
            entry.target.classList.remove("animate-slideIn");
          }
        });
      },
      { threshold: 0.1 } // 10% of the element must be visible to trigger animation
    );

    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const icons = iconsRef.current;

    if (title) observer.observe(title);
    if (subtitle) observer.observe(subtitle);
    if (icons) observer.observe(icons);

    return () => {
      if (title) observer.unobserve(title);
      if (subtitle) observer.unobserve(subtitle);
      if (icons) observer.unobserve(icons);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-10 px-4 font-poppins">
      {/* Main Title */}
      <h1
        ref={titleRef}
        className="text-4xl sm:text-4xl font-bold text-gray-900 opacity-0"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "32px" }}
      >
        {/* WhatsApp <span className="text-green-500"> */}

        <div className="relative">
        {/* Position the ellipse behind the text */}
        WhatsApp <span className="text-green-500">
        <div className="absolute left-[-16px] inset-3 w-full h-full transform -translate-y-3 translate-x-0.5">
          <Image
            src={hometextdesign}
            alt="Ellipse decoration"
            width={200} // Adjust size if needed
            height={200} // Adjust size if needed
            objectFit="contain"
          />
        </div>
        {/* Text that is inside the ellipse */}
        Support</span>
      </div>
      {/* WhatsApp <span className="text-green-500"> */}
      {/* Support</span> */}
      </h1>
      
    
      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="mt-4 text-base text-gray-700 text-center opacity-0"
        style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}
      >
        Be everywhere and support your business
      </p>

      {/* Icons Section (Commented Out) */}
      {/* <div
        ref={iconsRef}
        className="mt-8 flex space-x-4 opacity-0 flex-wrap justify-center"
      >
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faGlobe} size="2x" className="text-green-500" />
          <span className="text-sm text-gray-600">Website</span>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" className="text-green-500" />
          <span className="text-sm text-gray-600">WhatsApp</span>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faSquareInstagram} size="2x" className="text-pink-500" />
          <span className="text-sm text-gray-600">Instagram</span>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="text-green-600" />
          <span className="text-sm text-gray-600">Facebook</span>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500" />
          <span className="text-sm text-gray-600">YouTube</span>
        </div>
      </div> */}

      {/* Inline style for animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(50%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 1s ease-out forwards;
          opacity: 1;
        }

        /* Font family for Poppins */
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Support;
