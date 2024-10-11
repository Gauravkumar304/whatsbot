"use client";
import { useState, useEffect } from "react";

const Bots = () => {
  // Array of image URLs (You can add your own images)
  const images = [
    "/1.png",
    "/2.jpeg",
    "/3.jpg",
    "/4.jpg",
    "/5.png",
    "/6.png",
    "/7.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-8xl">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center rounded-lg">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] max-w-md sm:max-w-md md:max-w-2xl lg:max-w-4xl">
              {/* Responsive height and width for different screen sizes */}
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  loading="lazy" // Lazy loading for better performance
                  className={`absolute w-full h-full object-cover rounded-3xl transition-opacity duration-700 ease-in-out transform ${
                    index === currentImageIndex
                      ? "opacity-100 z-10" // Active image: fully visible
                      : "opacity-0 -rotate-6 scale-75 -translate-x-6 z-0" // Non-active images: Tilted view
                  }`}
                  style={{ width: "100%", height: "100%" }} // Force all images to take the full width and height of the container
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
