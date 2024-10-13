"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component
import botimg from "../app/assets/homedesign1.png"
const Bots = () => {
  // Array of image URLs
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
          <div className="flex justify-center items-center rounded-lg ">
          <Image 
            src={botimg}
            alt="" 
            className="hidden md:block m-20 mt-[-96px] "
            />
            <div className="relative  w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] max-w-md sm:max-w-md md:max-w-2xl lg:max-w-4xl">
              {/* Map through images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-700 ease-in-out transform ${
                    index === currentImageIndex
                      ? "opacity-100 z-10" // Active image: fully visible
                      : "opacity-0 -rotate-6 scale-75 -translate-x-6 z-0" // Non-active images: Tilted view
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Image ${index}`}
                    fill // Fill the parent container
                    className="rounded-3xl object-cover" // Add rounding to the image and cover it
                    priority={index === currentImageIndex} // Optional: prioritize the current image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
                  />
                </div>
              ))}
            </div>

            <Image 
            src={botimg}
            alt="" 
            className="hidden md:block m-20 mt-96"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bots;
