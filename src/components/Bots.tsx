"use client";
import { useState, useEffect } from "react";

const Bots = () => {
  // Array of image URLs (You can add your own images)
  const images = [
    "/Bot1.png",
    "/Bot2.png",
    "/Bot3.png",
    "/Bot4.png",
    "/Bot5.png",
    "/Bot6.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-6xl" >
        <div className="text-center mb-12">
          <div className="flex justify-center items-center rounded-lg">
            <div className="relative w-full h-[200px] md:h-[400px] max-w-4xl"> {/* Adjust height as needed */}
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className={`absolute w-full h-120 rounded-3xl object-contain transition-all duration-1000 ease-in-out transform ${
                    index === currentImageIndex
                      ? "opacity-100 rotate-0 scale-100 z-10" // Active image: normal view
                      : "opacity-0 -rotate-6 scale-75 -translate-x-6 z-0" // Non-active images: Tilted view
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bots;






































