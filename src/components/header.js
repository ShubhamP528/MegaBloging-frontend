import React from "react";

const header = () => {
  return (
    <div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Blog Logo */}
          <div className="text-3xl font-bold text-gray-800">
            <a href="/" className="text-blue-500 mx-5">
              MyBlog
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/new" className="text-gray-700 hover:text-blue-500">
              Add New
            </a>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 mx-6 hidden md:block">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* User Authentication */}
          <div className="flex items-center space-x-4">
            <a href="/signin" className="text-gray-700 hover:text-blue-500">
              Sign In
            </a>
            <a
              href="/signup"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
              Sign Up
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default header;
