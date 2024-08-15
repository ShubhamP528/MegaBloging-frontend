import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p className="text-gray-400">
              We are passionate about sharing our knowledge and experiences
              through blogs.
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul className="text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400">Email: support@bloggingapp.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} Blogging App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
