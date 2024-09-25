"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown, faRobot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"; // Import Link




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
      <nav className="bg-blue-500 p-1 fixed top-0 w-full z-50">
        <h1 className="text-white flex justify-center text-sm">
          Introducing customised app model Unleash the full Potential of your data
        </h1>
      </nav>

      {/* Second Navbar */}
      <nav className="bg-white p-2 shadow fixed top-7 w-full z-40">
        <div className="flex justify-between items-center">
          {/* Company Logo and Name on the Left */}
          <div className="flex justify-center mr-auto pl-16 max-tablet:pl-1 ">
            {/* <img src="/path/to/logo.png" alt="Company Logo" className="h-8 mr-2" /> */}
            <FontAwesomeIcon icon={faRobot} className=" h-5 text-purple-900"/> 
             <span className="text-black font-bold text-md ml-2">WhatsappBot</span>           
          </div>

            

          {/* Hamburger Menu Button (for mobile) */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="flex items-center text-white bg-gray-900 border border-gray-300 hover:bg-black focus:outline-none rounded px-2 py-1"
            >
              <FontAwesomeIcon icon={faBars} />
              Menu
            </button>
          </div>

          {/* Navbar Links and Buttons */}
          <div className={`${isMenu ? "block" : "hidden"} w-full md:flex md:justify-center items-center`}>
            {/* Centered Links */}
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 list-none mx-auto">
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-black font-bold"
                >
                 <Link href="/"> Home </Link>
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
                <div
                  onMouseLeave={handleMouseLeave} // Close dropdown on mouse leave
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

                    {/* Column 4: Platforms */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Platforms</h3>
                      <div className="flex flex-wrap space-x-2">
                        <img src="/path/to/icon1.png" alt="Platform 1" className="h-8" />
                        <img src="/path/to/icon2.png" alt="Platform 2" className="h-8" />
                        <img src="/path/to/icon3.png" alt="Platform 3" className="h-8" />
                        <img src="/path/to/icon4.png" alt="Platform 4" className="h-8" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <a href="#" className="text-black font-bold p-5">
                  Contact us
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-black font-bold p-5">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-bold p-10">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-bold p-10">
                  Platforms
                </a>
              </li> */}
              <li>
                <Link href="/login" className="text-black font-bold p-5"> {/* Update this link */}
                  Login
                </Link>

               
                
              </li>
            </ul>

            {/* Buttons on the Right */}
            <div className="flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold">
                Free Trial
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-bold">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
