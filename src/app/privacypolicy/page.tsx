"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Privacypolicy: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <h2 className="text-xl font-semibold mb-2">Terms</h2>
      <p className="mb-4">
        By Installing Pinggo you are agreeing to be bound by this App&lsquo;s Terms and Conditions of Use all applicable laws and regulations and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms you are prohibited from using or accessing Pinggo. The materials contained in this Pinggo website and App are protected by applicable copyright and trademark law.
      </p>

      <h2 className="text-xl font-semibold mb-2">What information do we collect?</h2>
      <p className="mb-4">
        We use sign-in with Google for authenticating your account in the app. Using which we collect your full name, email address, phone number and publicly available profile picture with your Google account. We do not collect any usage data of email/drive/docs or any other private data from your Google account.
      </p>
      <p className="mb-4">
        We also collect your call logs data and your phone numbers which is crucial to enable key CRM features like accurate logging and reporting of all business calls and mapping them with the right phone number in CRM and sending you WhatsApp notification for your follow-ups! Further we send this data to app.pinggo.ai where the entire app works.
      </p>
      <p className="mb-4">
        We also collect details of your android version, device brand and model number for our analytics and debugging purposes only! Further we send this data to app.pinggo.ai where the entire app works. This information is not used for advertising or shared with any 3rd party!
      </p>
      <p className="mb-4">
        We collect information from you when you place an order or respond to a survey. When ordering or registering on our site as appropriate you may be asked to enter your: name or e-mail address. You may however visit our site anonymously.
      </p>

      {/* Read More Button */}
      {!isExpanded && (
        <button
          onClick={toggleContent}
          className="text-blue-600 hover:underline mb-4"
        >
          Read More
        </button>
      )}

      {/* Additional Content */}
      {isExpanded && (
        <>
          <h2 className="text-xl font-semibold mb-2">What do we use your information for?</h2>
          <p className="mb-4">
            Call logs data: We use your call logs data for accurate logging and reporting of all business calls in CRM. Other data:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
            <li>To improve our Product (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
            <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
            <li>To process transactions Your information whether public or private will not be sold, exchanged, transferred or given to any other company for any reason whatsoever without your consent other than for the express purpose of delivering the purchased product or service requested.</li>
            <li>To send periodic emails The email address you provide may be used to send you information, respond to inquiries and/or other requests or questions.</li>
          </ol>
          <p className="mb-4">
            Pinggo&lsquo;s use of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-blue-600 hover:underline">Google API Services User Data Policy</a> and <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Google Privacy Policy</a> including the Limited Use requirements. In case any user wants to remove the Pinggo access from their Google account they can simply do from the Google security setting page.
          </p>

          <h2 className="text-xl font-semibold mb-2">How do we protect your information?</h2>
          <p className="mb-4">
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit or access your personal information.
          </p>
          <p className="mb-4">
            We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems and are required to keep the information confidential. Your User Data uploaded remains yours. Pinggo will not re-distribute, publish or disclose publicly any uploaded User Data unless required by law.
          </p>
          <p className="mb-4">
            Pinggo does not automatically review all User Data uploaded to the platform but has the right (but not the obligation) in their sole discretion to refuse or remove any User Data that is available via the Service.
          </p>

          <h2 className="text-xl font-semibold mb-2">Do we use cookies?</h2>
          <p className="mb-4">
            Yes, we use cookies to enable key features like user authentication, chat-support and to improve the overall user experience of the app/site.
          </p>

          <h2 className="text-xl font-semibold mb-2">Do we disclose any information to outside parties?</h2>
          <p className="mb-4">
            We do not sell, trade or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business or servicing you so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies or protect our or others rights, property or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising or other uses.
          </p>

          <h2 className="text-xl font-semibold mb-2">Facebook Integration Privacy Policy</h2>
          <p className="mb-4">
            What data do we collect and why? When you integrate the Pinggo with Facebook, we collect your Facebook authentication information! This is for the purpose of authentication only! You can ask for the deletion of Facebook integration by writing to <a href="mailto:r@pinggo.ai" className="text-blue-600 hover:underline">r@pinggo.ai</a> and all your personal data acquired from Facebook will be removed from the platform within 7 working days.
          </p>
          <p className="mb-4">
            After you integrate your Facebook account and lead forms with Pinggo, your leads from Facebook are also fetched and collected into the CRM in real-time!
          </p>

          <h2 className="text-xl font-semibold mb-2">How can you monitor the collected data?</h2>
          <p className="mb-4">
            You can view all the leads collected from Facebook on the Facebook integration dashboard!
          </p>

          <h2 className="text-xl font-semibold mb-2">How can you request deletion of the data?</h2>
          <p className="mb-4">
            Since the leads collected from Facebook and the history that you create on the CRM on those leads are essential business data, there is no self-service interface in the Pinggo app for deleting that data to avoid deletion by mistake. You can however request the deletion of the above mentioned data by writing to <a href="mailto:r@pinggo.ai" className="text-blue-600 hover:underline">r@pinggo.ai</a> from your registered email address and the data will be deleted within 7 working days.
          </p>
          <p className="mb-4">
            Disclaimer: Once you request a deletion of data along with the leads from Facebook, all the history on those leads that you&lsquo;ve created on the CRM will also get deleted!
          </p>

          <h2 className="text-xl font-semibold mb-2">Third-party links</h2>
          <p className="mb-4">
            Occasionally at our discretion we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless we seek to protect the integrity of our site and welcome any feedback about these sites.
          </p>

          <h2 className="text-xl font-semibold mb-2">Children Online Privacy Protection Act Compliance</h2>
          <p className="mb-4">
            We are in compliance with the requirements of COPPA (Children Online Privacy Protection Act) we do not collect any information from anyone under 13 years of age. Our website products and services are all directed to people who are at least 13 years old or older.
          </p>

          <h2 className="text-xl font-semibold mb-2">Online Privacy Policy Only</h2>
          <p className="mb-4">
            This online privacy policy applies only to information collected through our website and not to information collected offline.
          </p>

          <h2 className="text-xl font-semibold mb-2">Your Consent</h2>
          <p className="mb-4">
            By using our site you consent to our online privacy policy.
          </p>

          <h2 className="text-xl font-semibold mb-2">Changes to our Privacy Policy</h2>
          <p className="mb-4">
            If we decide to change our privacy policy we will post those changes on this page.
          </p>

          <h2 className="text-xl font-semibold mb-2">Contacting Us</h2>
          <p className="mb-4">
            If there are any questions regarding this privacy policy you may contact us using the information below.
          </p>
          <p className="mb-4">
            <a href="https://pinggo.ai" className="text-blue-600 hover:underline">https://pinggo.ai</a>
          </p>
          <p className="mb-4">Site: Galleria Pvt Ltd, Bangalore, India</p>
          <p className="mb-4">Email: <a href="mailto:support@pinggo.ai" className="text-blue-600 hover:underline">support@pinggo.ai</a></p>
          <p className="mb-4">
            These conditions shall be governed by and construed and take effect in accordance with the laws of India. You agree that for any action or proceeding to be brought by you the courts and tribunals at Gurgaon in India shall have exclusive jurisdiction to settle any disputes or claims which may arise out of or in connection with this agreement.
          </p>

          {/* Read Less Button */}
          <button
            onClick={toggleContent}
            className="text-blue-600 hover:underline mt-4"
          >
            Read Less
          </button>
        </>
      )}
    </div>
  );
};

export default Privacypolicy;
