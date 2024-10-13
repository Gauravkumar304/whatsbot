"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Selling = () => {
  // State to track which text is selected
  const [selectedText, setSelectedText] = useState('BUILD NO-CODE CHATBOT');
  // State to control the animation direction
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('right');
  // State to control the animation
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle text click to update selected state
  const handleTextClick = (text: string) => {
    // Determine animation direction based on the selected text
    setAnimationDirection(selectedText === text ? 'right' : 'left'); // If the same text is clicked, slide out to the right
    setSelectedText(text);
    setIsAnimating(true); // Trigger animation
  };

  // Function to determine which image to show based on the selected text
  const renderImage = () => {
    switch (selectedText) {
      case 'BUILD NO-CODE CHATBOT':
        return '/codechatbot.png'; // Image path for the chatbot feature
      case 'WHATSAPP CART & CATALOGS':
        return '/catlog.png'; // Image path for WhatsApp catalog
      case 'WHATSAPP PAYMENTS':
        return '/payment.png'; // Image path for WhatsApp payments
      default:
        return '/broad.png'; // Fallback image
    }
  };

  // Effect to reset animation state when the selectedText changes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false); // Reset animation after 300ms
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-gray-50 font-poppins">
      {/* Heading */}
      <div className="text-center ">
        <h1 className="text-3xl p-2 md:text-4xl font-bold">Sell your Products on WhatsApp</h1>
        <p className="text-lg pb-16 text-gray-600">WhatsApp Catalog, Cart & Payments in One Place!</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
        {/* Left Side: Image Section */}
        <div className="w-full md:w-3/5 relative overflow-hidden"> {/* Set width to 60% for image side */}
          <Image
            src={renderImage()}
            alt="Feature Image"
            width={600}
            height={600}
            className={`rounded-lg shadow-md transition-transform duration-300 ${
              isAnimating ? (animationDirection === 'left' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'
            }`}
            onLoad={() => setIsAnimating(false)} // Reset animation on load
          />
        </div>

        {/* Right Side: Text Options */}
        <div className="w-full md:w-2/5 flex flex-col gap-8"> {/* Set width to 40% for text side */}
            {/* Option 1 */}
            <div
                className={`p-4 border rounded-md cursor-pointer transition ${
                selectedText === 'BUILD NO-CODE CHATBOT' ? 'bg-green-100' : 'bg-white'
                }`}
                onClick={() => handleTextClick('BUILD NO-CODE CHATBOT')}
            >
                <p className="font-semibold text-sm md:text-base lg:text-base">BUILD NO-CODE CHATBOT IN MINUTES</p>
                <p className="text-xs md:text-sm lg:text-sm">Build your Own Chatbot Flows your Way! Easy-to-use Chatbot & Catalog Flow builder to build your conversational journeys</p>
            </div>

            {/* Option 2 */}
            <div
                className={`p-4 border rounded-md cursor-pointer transition ${
                selectedText === 'WHATSAPP CART & CATALOGS' ? 'bg-green-100' : 'bg-white'
                }`}
                onClick={() => handleTextClick('WHATSAPP CART & CATALOGS')}
            >
                <h2 className="font-semibold text-sm md:text-base lg:text-base">WHATSAPP CART & CATALOGS</h2>
                <p className="text-xs md:text-sm lg:text-sm">Drive Orders via WhatsApp with WhatsApp Catalogs and Cart. Seamlessly build your Catalog in 10 minutes and get going! </p>
            </div>

            {/* Option 3 */}
            <div
                className={`p-4 border rounded-md cursor-pointer transition ${
                selectedText === 'WHATSAPP PAYMENTS' ? 'bg-green-100' : 'bg-white'
                }`}
                onClick={() => handleTextClick('WHATSAPP PAYMENTS')}
            >
                <h2 className="font-semibold text-sm md:text-base lg:text-base">WHATSAPP PAYMENTS</h2>
                <p className="text-xs md:text-sm lg:text-sm">Yes! Collect Payments now on WhatsApp Seamlessly with WhatsApp Pay and other modes of Payments (Razorpay, Payu etc) and grow your revenues. </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Selling;
