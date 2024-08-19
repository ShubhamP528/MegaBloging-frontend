import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NODE_API_ENDPOINT } from "../utils/utils";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${NODE_API_ENDPOINT}/api/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl p-8 md:flex md:space-x-10 relative">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-300 rounded-full opacity-20 animate-ping -z-10"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-300 rounded-full opacity-20 animate-pulse -z-10"></div>

        {/* Left Section: Form */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center md:text-left">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center md:text-left">
            Have any questions or feedback? We’d love to hear from you! Fill in
            the form, and we'll get back to you as soon as possible.
          </p>

          {status && (
            <p className="text-green-500 font-semibold text-center md:text-left">
              {status}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-fade-in-up"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-indigo-300 flex justify-center items-center shadow-lg transition-transform transform hover:scale-105"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2z"
                      fill="currentColor"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Contact Information
          </h2>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="mailto:support@bloggingapp.com"
              className="text-blue-500 hover:underline"
            >
              support@bloggingapp.com
            </a>
          </p>
          <p className="text-gray-600 mb-4">Phone: +123 456 7890</p>
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
