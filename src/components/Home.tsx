"use client";
import React, { useState }  from "react";
import Image from "next/image";
import homeimg from "../app/assets/home.webp"; // Replace this with the actual path
import homedesign1 from "../app/assets/homedesign1.png"
// import hometextdesign from "../app/assets/hometextdesign.png"

const Home:React.FC = () => {

  const [ripple, setRipple] = useState<{ x: number; y: number; size: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRipple({ x, y, size });

    // Remove ripple effect after animation duration
    setTimeout(() => setRipple(null), 50);
  };



  return (
    <div className="flex flex-col md:flex-row items-center  px-4 md:px-12 lg:px-20 pt-16 md:pt-12">
      {/* Left Side: Main Text */}
      <Image
          src={homedesign1}
          alt=""
          className=" md:pt-96  "
          />
      
      <div className="md:w-1/2 w-full mb-4 p-4 md:p-6 mx-4 md:mx-0  my-6 md:my-20">
        <div className="text-center md:text-left">
          {/* Headings in one line, reduced text size for better fit */}
          <p className="text-black pt-4 md:pt-16 text-lg md:text-3xl font-bold font-poppins leading-tight">
            Understand the differences between
          </p>
          
          <p className="text-green-500 text-lg mb-2 md:text-3xl font-bold font-poppins leading-tight">
          {/* <Image
            src={hometextdesign}
            alt="text background"/> */}
            Cloud API and Business API  
           
          </p> 





          {/* Paragraphs adjusted for one line with reduced size */}
          <p className="text-xs md:text-base font-poppins leading-tight">
            Prerequisites and step-by-step guide for setting up WhatsApp Cloud API
          </p>
          <p className="text-xs md:text-base mb-4 font-poppins leading-tight">
            Best practices and reasons to choose Pinggo for your API setup
          </p>

          {/* Button adjusted for better responsiveness */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
              <button
                className="relative overflow-hidden bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-semibold font-poppins transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none"
                onClick={handleClick}
              >
                <span className="relative z-10">Book Demo</span>
                {ripple && (
                  <span
                    className="absolute bg-white opacity-50 rounded-full pointer-events-none animate-ripple"
                    style={{
                      top: ripple.y,
                      left: ripple.x,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                  />
                )}
              </button>
            </div>




          {/* Small disclaimer text */}
          <p className="text-xs md:text-sm text-green-500 font-poppins ">
            *14 days Free Trial  &nbsp;&nbsp;&nbsp;   * No Credit Card Required
          </p>
         
        </div>

        

      </div>
      
      {/* Right Side: Image */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end pt-8 md:pt-28">
        <Image
          src={homeimg}
          alt="Home image description"
          className="object-contain w-full md:w-2/3 lg:w-[800px] h-auto" // Enlarging the image for all screens
        />
      </div>


    </div>
  );
};

export default Home;
