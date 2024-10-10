"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faSquareInstagram, faSquareWhatsapp, faFacebookMessenger, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../app/assets/pingoo-sqare-small.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMouseLeave = () => {
    setIsDropdownOpen(false); // Close dropdown when mouse leaves the dropdown area
  };

  return (
    <div>
      {/* First Navbar with Raindrop Effect */}
      <nav className="bg-blue-500 p-1 fixed top-0 w-full h-8 z-50 overflow-hidden">
  <p className="text-white flex justify-center p-1 text-[10px] sm:text-xs font-semibold text-center font-poppins">
    Set Up WhatsApp Cloud API in Just 10 Minutes (+ Best Practices) [2024]
  </p>

  {/* Floating Droplet Animation */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 500 }).map((_, i) => (
      <span
        key={i}
        className="absolute bg-gray-300 rounded-full opacity-30 drop-shadow-lg animate-float w-[2px] h-[2px] sm:w-[3px] sm:h-[3px]"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1}s`,
          animationDuration: `${2 + Math.random() * 1}s`,
          willChange: 'transform, opacity',
        }}
      ></span>
    ))}
  </div>
</nav>


      {/* Second Navbar */}
      <nav className="bg-white p-2 shadow fixed top-[32px] sm:top-[32px] w-full z-40">
        <div className="flex justify-between items-center px-4 md:px-16">
          {/* Company Logo and Name on the Left */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" className="h-auto w-32" />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-blue-500" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" /> 
            )}
  
          </button>

          {/* Navbar Links and Buttons */}
          <div className={`w-full hidden md:flex md:items-center md:space-x-4`}> 
            <ul className="flex flex-col md:flex-row justify-center items-center flex-grow space-y-2 md:space-y-0 md:space-x-4 list-none p font-poppins">
              <li>
                <Link href="#">
                  <p className="text-black font-semibold text-sm hover:text-blue-500 cursor-pointer">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-black font-semibold text-sm hover:text-blue-500 cursor-pointer">
                    Features
                  </p>
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-black font-semibold text-sm hover:text-blue-500 cursor-pointer"
                >
                  Solutions
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-6 w-[600px]"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Templates</h3>
                        <ul className="space-y-1">
                          <li className="text-gray-700">Education</li>
                          <li className="text-gray-700">Real Estate</li>
                          <li className="text-gray-700">Automobile</li>
                          <li className="text-gray-700">Health Care</li>
                          <li className="text-gray-700">E-Commerce</li>
                          <li className="text-gray-700">HR & ITES</li>
                          <li className="text-gray-700">Fintech</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
                        <div className="space-y-4">
                          <div className="flex space-x-4">
                            <a href="#" className="text-sm hover:underline">
                              <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" className="text-green-500" />
                              WhatsApp
                            </a>
                            <a href="#" className="text-sm hover:underline">
                              <FontAwesomeIcon icon={faSquareInstagram} size="2x" className="text-pink-500" />
                              Instagram
                            </a>
                          </div>
                          <div className="flex space-x-4">
                            <a href="#" className="text-sm hover:underline">
                              <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="text-blue-600" />
                              Messenger
                            </a>
                            <a href="#" className="text-sm hover:underline">
                              <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500" />
                              YouTube
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
            {/* Buttons on the Right */}
            <div className="flex space-x-4">
              <button className="text-blue-500 border border-blue-500 px-4 py-2 rounded font-semibold text-sm hover:bg-blue-200">
                <Link href="/login">Login</Link>
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-blue-600">
                Book Demo
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-4">
            <ul className="flex flex-col items-center space-y-4 text-sm text-blue-500 font-medium">
              <li>
                <Link href="/" className=" text-black font-semibold text-sm hover:text-blue-500 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black font-semibold text-sm hover:text-blue-500 cursor-pointer">
                  Features
                </Link>
              </li>
              <li>
                <button onClick={toggleDropdown} className="text-black font-semibold text-sm hover:text-blue-500 cursor-pointer">
                  Solutions
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 p-4 bg-gray-50 w-full max-w-xs shadow-lg rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>Education</li>
                      <li>Real Estate</li>
                      <li>Automobile</li>
                      <li>Health Care</li>
                      <li>E-Commerce</li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>

            {/* Mobile Right-side Buttons */}
            <div className="flex flex-col items-center space-y-4">
              <button className="border border-blue-500 text-blue-500 px-4 py-2 font-semibold text-xs rounded hover:bg-blue-50 w-full max-w-xs">
              <Link href="/login">Login</Link>
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 font-semibold text-xs rounded hover:bg-blue-600 w-full max-w-xs">
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
