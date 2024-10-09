"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, text: "Welcome to Pinggo !!" },
  { id: 2, text: "Can you please tell me your name?" },
  { id: 3, text: "What is the nature of your business?" },
  {
    id: 4,
    options: ["Ecommerce", "doctor", "astrologer", "grocery shop", "restaurant", "Others"],
  },
  {
    id: 5,
    text: "Pinggo is a Customizable AI bot that can help satisfy all your business needs.",
  },
  {
    id: 6,
    text: "Connect with 2 billion+ people all over the world directly on their mobile.",
  },
  {
    id: 7,
    text: "Easily integrate Pinggo into your business.",
  },
];

const Codepage = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleSteps((prev) => {
        const newSteps = [...prev, index];
        index = (index + 1) % steps.length; // Loop the index
        return newSteps;
      });
    }, 0); // Increased delay for smoother transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center p-4 md:p-10">
      <div className="bg-gray-900 text-white w-full max-w-6xl p-4 md:p-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 rounded-lg px-6 lg:px-12">
        {/* Left side "Ask a new question" box */}
        <div className="flex flex-col items-start justify-start p-3 bg-gray-800 rounded-lg shadow-lg mb-4 md:mb-0 w-full md:w-1/5 h-auto md:h-60">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Ask a new question</h2>
          <input
            type="text"
            placeholder="Type and press enter"
            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
          />
          <div className="space-y-2 mt-2">
            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 p-1 rounded-full">
                <span className="text-blue-400 text-lg">?</span>
              </div>
              <span className="text-sm">List your service</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 p-1 rounded-full">
                <span className="text-blue-400 text-lg">◉</span>
              </div>
              <span className="text-sm">Purchase product, schedule meet etc</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-700 p-1 rounded-full">
                <span className="text-blue-400 text-lg">☑</span>
              </div>
              <span className="text-sm">Get tracking</span>
            </div>
          </div>
        </div>

        {/* Center bot flow content */}
        <div className="flex-1 flex flex-col items-center justify-center relative space-y-4 md:space-y-8">
          {/* Heading */}
          <h1 className="text-2xl md:text-2xl font-bold mb-6">No Code Builder</h1>

          {/* Container animation */}
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, translateY: -20 }}
              animate={
                visibleSteps.includes(index)
                  ? { opacity: 1, translateY: 0 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delays based on index for smooth entrance
              className={`text-center p-3 md:p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-xl relative ${
                index >= 5 && visibleSteps.includes(index)
                  ? "flex flex-col md:flex-row space-x-0 md:space-x-4 justify-between"
                  : ""
              } ${step.id === 4 || step.id === 7 ? "flex justify-center" : ""}`} // Center for id 4 and 7
            >
              {typeof step.text === "string" && (
                <div className="flex justify-center">
                  <p className="text-base md:text-lg font-sm">{step.text}</p>
                </div>
              )}
              {step.options && (
                <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-2 gap-2 md:gap-4">
                  {step.options.map((option) => (
                    <div
                      key={option}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-blue-600"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right side with placeholder text */}
        <div className="flex flex-col justify-center p-3 bg-gray-800 rounded-lg shadow-lg w-full md:w-1/4 h-auto md:h-48">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="bg-green-500 p-1 text-xs rounded-full">☑</span>
              <span className="text-sm">Use prebuilt templates to go live in minutes</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="bg-green-500 p-1 text-xs rounded-full">☑</span>
              <span className="text-sm">Customize design & flow with simple clicks</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="bg-green-500 p-1 text-xs rounded-full">☑</span>
              <span className="text-sm">Integrate with WhatsApp server and start generating leads</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Codepage;
