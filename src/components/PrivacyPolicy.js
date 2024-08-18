import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-full bg-white shadow-xl rounded-lg p-8 mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Effective Date: [Insert Date]
        </p>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Blogging App. We are committed to protecting your privacy
            and ensuring a safe online experience. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our website and services. Please read this policy carefully.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect and process the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Personal Information: Name, email address, phone number, etc.
            </li>
            <li>
              Usage Data: Information about how you interact with our site.
            </li>
            <li>
              Cookies and Tracking Technologies: To enhance your experience and
              gather information about usage patterns.
            </li>
          </ul>
        </section>

        {/* Section 3: How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the collected information for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>To provide and maintain our services.</li>
            <li>To notify you about changes to our services.</li>
            <li>To provide customer support.</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our services.
            </li>
            <li>To monitor the usage of our services.</li>
          </ul>
        </section>

        {/* Section 4: Sharing Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not share your personal information with third parties except
            in the following cases:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>With your consent.</li>
            <li>To comply with legal obligations.</li>
            <li>To protect and defend our rights and property.</li>
            <li>
              To prevent or investigate possible wrongdoing in connection with
              our services.
            </li>
          </ul>
        </section>

        {/* Section 5: Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            5. Security of Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use commercially reasonable administrative, technical, and
            physical security measures to help protect your personal
            information. However, no method of transmission over the Internet or
            method of electronic storage is 100% secure. Therefore, we cannot
            guarantee its absolute security.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            6. Contact Us
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Email: support@bloggingapp.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: [Your Company Address]</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
