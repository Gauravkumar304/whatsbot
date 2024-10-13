"use client";
import React, { useState, useEffect, useRef } from "react";

const Platform: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("broadcast");
  const [videoPlaying, setVideoPlaying] = useState<boolean>(true);
  const [animation, setAnimation] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const videoSources: { [key: string]: string } = {
    broadcast: "/videos/Aboutvideo.mp4",
    liveChat: "/videos/Smatbot+Product+Demo.mp4",
    smartChatbots: "/videos/Aboutvideo.mp4",
    notifications: "/videos/Smatbot+Product+Demo.mp4",
    analytics: "/videos/Aboutvideo.mp4",
  };

  const tabContent: { [key: string]: string } = {
    broadcast:
      "You can simply import all your Contacts and Broadcast approved messages instantly. See real-time analytics on the AiSensy Platform for delivered, read rates, and more.",
    liveChat:
      "Engage with your users in real-time via WhatsApp live chat to improve customer satisfaction and resolve queries faster.",
    smartChatbots:
      "Automate conversations with smart chatbots to handle common user queries and provide instant support.",
    notifications:
      "Send automated notifications to keep your customers updated with the latest information and alerts.",
    analytics:
      "Track and measure your campaign performance with detailed analytics on message delivery, open rates, and more.",
  };

  const tabHeadings: { [key: string]: string } = {
    broadcast: "Import & Broadcast Instantly",
    liveChat: "Real-Time WhatsApp Live Chat",
    smartChatbots: "Smart Chatbots for Instant Support",
    notifications: "Automate Notifications for Updates",
    analytics: "Track & Measure Campaign Analytics",
  };

  const tabs = [
    { name: "Broadcast Messaging", key: "broadcast" },
    { name: "Live Chat", key: "liveChat" },
    { name: "Smart Chatbots", key: "smartChatbots" },
    { name: "Automate Notifications", key: "notifications" },
    { name: "Track Analytics", key: "analytics" },
  ];

  const handleTabChange = (key: string) => {
    if (key !== activeTab) {
      setVideoPlaying(false);
      setAnimation(false);
      setTimeout(() => {
        setActiveTab(key);
        setVideoPlaying(true);
        setAnimation(true);
      }, 300);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimation(true);
        } else {
          setAnimation(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="overflow-hidden py-8 px-4 sm:px-6 lg:px-16 bg-white max-w-screen-xl mx-auto font-poppins"
    >
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">
          The Most <span className="text-green-600">‘Complete’ WhatsApp Platform</span>
        </h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Everything you need to notify, chat & engage your users — All in one place
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-3 sm:px-4 text-xs sm:text-base font-bold rounded transition-transform duration-200 ease-in-out ${
              activeTab === tab.key
                ? "bg-green-100 text-green-700"
                : "text-gray-600 hover:text-green-600"
            }`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`bg-green-50 p-4 rounded-lg shadow-lg max-w-xs sm:max-w-sm lg:max-w-md mx-auto transform transition-transform duration-500 ${
            animation ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative border-2 border-green-100 rounded-lg overflow-hidden aspect-video">
            <video
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                videoPlaying ? "opacity-100" : "opacity-0"
              }`}
              key={activeTab}
              autoPlay
              loop
              muted
            >
              <source src={videoSources[activeTab]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div
          className={`flex flex-col p-8 justify-center text-center lg:text-left transform transition-transform duration-500 ${
            animation ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-4">{tabHeadings[activeTab]}</h2>
          <p className="text-gray-600 text-sm sm:text-base">{tabContent[activeTab]}</p>
          <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 w-full md:w-fit mx-auto lg:mx-0">
            Book Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
