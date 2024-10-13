"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import broadcast from "../app/assets/img1.png";

const Broadcast: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    const currentRef = ref.current; // Store current ref to avoid closure issue

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored ref for cleanup
      }
    };
  }, [controls]);

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:px-8 lg:px-20">
      <div
        className="flex flex-col lg:flex-row items-center justify-center p-6 sm:p-8 lg:p-16 bg-white max-w-6xl mx-auto shadow-md rounded-lg"
        ref={ref}
      >
        {/* Left Section: Text Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-gray-800 text-center lg:text-left">
            Broadcast Promotional Messages <span className="text-gray-500">(Officially)</span>
          </h1>
          <p className="mt-4 text-gray-600 text-center lg:text-left">
            Well, WhatsApp recently allowed Businesses to Broadcast and Automate Promotional Messages via WhatsApp Business API.
          </p>
          <p className="mt-2 text-gray-600 text-center lg:text-left">
            You can now send exciting offers, discount coupon codes, and festival wishes without getting your number blocked!
          </p>

          {/* Call to Action */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <Link href="#" className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-600">
              <span className="mr-2 text-xs bg-purple-100 text-purple-600 rounded-full px-2 py-1">INTERESTING?</span>
              Start Now for FREE →
            </Link>
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={broadcast}
            alt="WhatsApp Broadcast"
            className="rounded-lg shadow-lg"
            layout="responsive"
            width={500}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Broadcast;
