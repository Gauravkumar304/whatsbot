"use client";
import React, { useEffect, useRef } from "react";

// Debounced Intersection Observer handler to prevent excessive triggering
const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Leading: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-fadeInUp");
          } else {
            target.classList.remove("animate-fadeInUp");
          }
        });
      }, 100), // Debounce to prevent excessive calls
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
    <div ref={sectionRef} className="text-center p-10 md:p-20 font-poppins">
      <h3
        ref={headingRef}
        className="text-xl md:text-2xl font-bold mb-8 md:mb-12 opacity-0 transition-opacity duration-500"
      >
        Leading the Way, Capture and CI Recognitions
      </h3>

      {/* Image Grid commented out for now */}
      {/* <div
        ref={imagesRef}
        className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-4xl mx-auto opacity-0 transition-opacity duration-500"
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
    </div>
  );
};

export default Leading;
