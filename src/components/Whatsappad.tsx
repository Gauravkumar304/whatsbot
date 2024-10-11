// components/Whatsappad.tsx
import Image from 'next/image';

const WhatsappAd = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white font-poppins">
      {/* Left Side: Text Section */}
      <div className="md:w-[40%] w-full text-center md:text-left space-y-6 md:space-y-8">
        <h1 className="text-2xl md:text-[32px] font-bold leading-snug">
          Run Click to WhatsApp Ads for 5X Leads
        </h1>
        <p className="text-sm md:text-[16px] text-gray-600 leading-relaxed">
          Run Ads on Facebook & Instagram that land on WhatsApp. 5X Your lead generations & 2-3X Conversions Instantly!
        </p>
        <ul className="space-y-2 text-sm md:text-[16px]">
          <li className="flex items-start justify-center md:justify-start space-x-2">
            <span className="text-green-500">•</span>
            <span>Build Click to WhatsApp Ads from AiSensy Platform</span>
          </li>
          <li className="flex items-start justify-center md:justify-start space-x-2">
            <span className="text-green-500">•</span>
            <span>Get all your Leads Segregated according to Ad Campaigns</span>
          </li>
          <li className="flex items-start justify-center md:justify-start space-x-2">
            <span className="text-green-500">•</span>
            <span>Build Chatbot Flows based on Ads or Retarget via Broadcast</span>
          </li>
        </ul>
        <a href="#start-trial" className="inline-block mt-4 text-green-600 font-semibold text-[16px]">
          Start Your 14-Day Free Trial &rarr;
        </a>
      </div>

      {/* Right Side: Image Section */}
      <div className="md:w-[40%] w-full flex flex-col items-center mt-6 md:mt-0 md:ml-6">
        <div className="w-full max-w-md">
          <Image
            src="/whatsappad.png" // Replace with the correct image path
            alt="Ads Manager"
            width={1200}
            height={1200} // Adjust height to maintain a good aspect ratio
            layout="responsive"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsappAd;
