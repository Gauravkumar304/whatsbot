"use client";
import React, { useState } from "react";

const Termscondition: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to Pinggo! These terms and conditions outline the rules and
        regulations for the use of SiteGalleria Pvt. Ltd.&lsquo;s Website
        located at{" "}
        <a href="https://pinggo.ai" className="text-blue-600 hover:underline">
          pinggo.ai
        </a>
        .
      </p>
      <p className="mb-4">
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Pinggo if you do not agree to take
        all of the terms and conditions stated on this page.
      </p>

      {/* Additional Content */}

      <h2 className="text-xl font-semibold mb-2">Terminology</h2>
      <p className="mb-4">
        The following terminology applies to these Terms and Conditions, Privacy
        Statement, and Disclaimer Notice and all Agreements: &quot;Client&quot;,
        &quot;You&quot;, and &quot;Your&quot; refers to you, the person log on
        this website and compliant to the Company&apos;s terms and conditions.
        &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;,
        &quot;Our&quot;, and &quot;Us&quot; refers to our Company.
        &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot; refers to both
        the Client and ourselves.
      </p>
      <p className="mb-4">
        All terms refer to the offer, acceptance, and consideration of payment
        necessary to undertake the process of our assistance to the Client in
        the most appropriate manner for the express purpose of meeting the
        Client&apos;s needs in respect of provision of the Company&apos;s stated
        services, in accordance with and subject to prevailing law of India. Any
        use of the above terminology or other words in the singular, plural,
        capitalization, and/or he/she or they, are taken as interchangeable and
        therefore as referring to same.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        We employ the use of cookies. By accessing Pinggo, you agreed to use
        cookies in agreement with SiteGalleria Pvt. Ltd.&lsquo;s{" "}
        <a
          href="https://pinggo.ai/privacy-policy"
          className="text-blue-600 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>
      <p className="mb-4">
        Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </p>

      {!isExpanded && (
        <button
          onClick={toggleContent}
          className="text-blue-600 hover:underline mb-4"
        >
          Read More
        </button>
      )}

      {isExpanded && (
        <>
          <h2 className="text-xl font-semibold mb-2">License</h2>
          <p className="mb-4">
            Unless otherwise stated, SiteGalleria Pvt. Ltd. and/or its licensors
            own the intellectual property rights for all material on Pinggo. All
            intellectual property rights are reserved. You may access this from
            Pinggo for your own personal use subjected to restrictions set in
            these terms and conditions.
          </p>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Republish material from Pinggo</li>
            <li>Sell, rent or sub-license material from Pinggo</li>
            <li>Reproduce, duplicate or copy material from Pinggo</li>
            <li>Redistribute content from Pinggo</li>
          </ul>
          <p className="mb-4">This Agreement shall begin on the date hereof.</p>

          <h2 className="text-xl font-semibold mb-2">User Comments</h2>
          <p className="mb-4">
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            SiteGalleria Pvt. Ltd. does not filter, edit, publish, or review
            Comments prior to their presence on the website. Comments do not
            reflect the views and opinions of SiteGalleria Pvt. Ltd., its
            agents, and/or affiliates. Comments reflect the views and opinions
            of the person who post their views and opinions.
          </p>
          <p className="mb-4">
            To the extent permitted by applicable laws, SiteGalleria Pvt. Ltd.
            shall not be liable for the Comments or for any liability, damages,
            or expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </p>
          <p className="mb-4">
            SiteGalleria Pvt. Ltd. reserves the right to monitor all Comments
            and to remove any Comments which can be considered inappropriate,
            offensive, or causes breach of these Terms and Conditions.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            Hyperlinking to Our Content
          </h2>
          <p className="mb-4">
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses;
            </li>
            <li>
              System-wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Website.
            </li>
          </ul>

          {/* Read More Button */}

          <h2 className="text-xl font-semibold mb-2">iFrames</h2>
          <p className="mb-4">
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>

          <h2 className="text-xl font-semibold mb-2">Content Liability</h2>
          <p className="mb-4">
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that are arising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene, or criminal,
            or which infringes, otherwise violates, or advocates the
            infringement or other violation of any third party rights.
          </p>

          <h2 className="text-xl font-semibold mb-2">Disclaimer</h2>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties, and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
          <p className="mb-4">
            These conditions shall be governed by and construed and take effect
            in accordance with the laws of India. You agree that for any action
            or proceeding to be brought by you, the courts and tribunals at
            Gurgaon in India shall have exclusive jurisdiction to settle any
            disputes or claims which may arise out of or in connection with this
            agreement.
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

export default Termscondition;
