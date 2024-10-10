"use client";
import React, { useEffect, useRef } from "react";

const Leading: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              entry.target.classList.add("animate-slideUp");
            } else if (entry.target === imagesRef.current) {
              entry.target.classList.add("animate-slideUp");
            }
          } else {
            // Reset the animation when it leaves the viewport, so it can re-trigger when it re-enters
            if (entry.target === headingRef.current) {
              entry.target.classList.remove("animate-slideUp");
            } else if (entry.target === imagesRef.current) {
              entry.target.classList.remove("animate-slideUp");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const heading = headingRef.current;
    const images = imagesRef.current;
    if (heading) observer.observe(heading);
    if (images) observer.observe(images);

    return () => {
      if (heading) observer.unobserve(heading);
      if (images) observer.unobserve(images);
    };
  }, []);

  return (
    <div ref={sectionRef} className="text-center  p-10 md:p-20">
      <h3 ref={headingRef} className="text-xl md:text-2xl font-bold mb-8 md:mb-12 opacity-0">
        Leading the Way, Capture and CI Recognitions
      </h3>

      {/* Centered Image Grid */}
      {/* <div
        ref={imagesRef}
        className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-4xl mx-auto opacity-0"
      >
        <img src="/lead1.png" alt="Capterra" className="h-16 md:h-20 w-auto object-contain" />
        <img
          src="/lead2.png"
          alt="Gartner Peer Insights Customers' Choice"
          className="h-16 md:h-20 w-auto object-contain"
        />
        <img
          src="/lead3.png"
          alt="G2 Leader Summer 2021"
          className="h-16 md:h-20 w-auto object-contain"
        />
        <img
          src="/lead4.png"
          alt="G2 Leader Fall 2021"
          className="h-16 md:h-20 w-auto object-contain"
        />
      </div> */}

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Leading;
