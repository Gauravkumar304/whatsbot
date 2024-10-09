"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faRobot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faSquareInstagram, faSquareWhatsapp, faFacebookMessenger, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenu(!isMenu);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleMouseLeave = () => {
    setIsDropdownOpen(false); // Close dropdown when mouse leaves the dropdown area
  };

  return (
    <div>
      {/* First Navbar */}
      <nav className="bg-blue-500 p-1 fixed top-0 w-full z-50 ">
        <p className="text-white  flex justify-center text-base text-center">
          {/* Introducing customised app model Unleash the full Potential of your data */}
          Set Up WhatsApp Cloud API in Just 10 Minutes (+ Best Practices) [2024]
        </p>
      </nav>

      {/* Second Navbar */}
      <nav className="bg-white p-2 shadow fixed top-[48px] sm:top-[32px] w-full z-40"> {/* Added margin for mobile screens */}
        <div className="flex justify-between items-center px-4 md:px-16">
          {/* Company Logo and Name on the Left */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faRobot} className="h-5 text-purple-900" />
            <span className="text-black font-bold text-md">WhatsappBot</span>
          </div>

          {/* Hamburger Menu Button (for mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white bg-blue-500 border hover:bg-blue-600 focus:outline-none rounded px-2 py-1  text-sm "
            >
              <FontAwesomeIcon icon={faBars} />
              Menu
            </button>
          </div>

          {/* Navbar Links and Buttons */}
       <div className={`${isMenu ? "block" : "hidden"} w-full md:flex md:items-center`}>
  {/* Centered Links */}
            <ul className="flex flex-col md:flex-row justify-center items-center flex-grow space-y-2 md:space-y-0 md:space-x-4 list-none p">
    <li className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-black font-semibold text-sm hover:text-blue-500 cursor-pointer"
      >
        Home
        <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
      </button>
      <div
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-6 w-[600px] transition-all duration-500 ease-in-out transform ${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 max-h-[500px]"
                      : "opacity-0 translate-y-[-20px] max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="grid grid-cols-4 gap-4">
                    {/* Column 1: Our Solutions */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Our Solutions</h3>
                      <ul className="space-y-1">
                        <li className="text-gray-700">Website Bots</li>
                        <li className="text-gray-700">WhatsApp Bots</li>
                        <li className="text-gray-700">Instagram Bots</li>
                        <li className="text-gray-700">Arabic Bots</li>
                        <li className="text-gray-700">On-premise Bots</li>
                        <li className="text-gray-700">Live Chat</li>
                      </ul>
                    </div>

                    {/* Column 2: Use Cases */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Use Cases</h3>
                      <ul className="space-y-1">
                        <li className="text-gray-700">General</li>
                        <li className="text-gray-700">Marketing & Sales</li>
                        <li className="text-gray-700">Support</li>
                      </ul>
                    </div>

                    {/* Column 3: Templates */}
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

                    {/* Column 4: Follow Us */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <a href="#" className="text-sm hover:underline">
                            <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" className="text-green-500" /> WhatsApp
                          </a>
                          <a href="#" className="text-sm hover:underline">
                            <FontAwesomeIcon icon={faSquareInstagram} size="2x" className="text-pink-500" /> Instagram
                          </a>
                        </div>
                        <div className="flex space-x-4">
                          <a href="#" className="text-sm hover:underline">
                            <FontAwesomeIcon icon={faFacebookMessenger} size="2x" className="text-blue-600" /> Messenger
                          </a>
                          <a href="#" className="text-sm hover:underline">
                            <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500" /> YouTube
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link href="#footer">
                  <p className="text-black font-semibold text-sm hover:text-blue-500 cursor-pointer">
                    Contact Us
                  </p>
                </Link>
              </li>

              <li>
                <Link href="/login">
                  <p className="text-black font-semibold text-sm hover:text-blue-500 cursor-pointer">Login</p>
                </Link>
              </li>
            </ul>

            {/* Buttons on the Right */}
            <div className="flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-4 ml-auto">
              <button className="text-blue-500 bg-white border border-blue-500 px-4 py-2 font-semibold text-sm hover:bg-blue-200 rounded">
                Free Trial
              </button>
              <button className="bg-blue-500 text-white border-blue-500 px-4 py-2 font-semibold text-sm hover:bg-blue-600 rounded">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
