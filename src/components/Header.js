import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai"; // Import the write and close icons

const Header = () => {
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Blog Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link to="/" className="text-blue-500 mx-5 md:text-3xl text-2xl">
            AkBlogs
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 flex items-center"
          >
            Home
          </Link>
          {user?.username === "admin" && (
            <Link
              to="/write"
              className="text-gray-700 hover:text-blue-500 py-2 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineEdit className="mr-2" /> Write
            </Link>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-8 hidden md:block">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full border rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* User Authentication */}
        <div className="items-center space-x-4 hidden md:block">
          {user?.username ? (
            <>
              <span className="text-gray-700">Hello, {user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 hover:text-blue-500">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform ${
          isOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <nav className="flex flex-col py-4 px-6">
          {/* Close Button */}
          <button
            className="self-end text-gray-700"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <AiOutlineClose className="w-6 h-6" />
          </button>

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 py-2 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {user?.username === "admin" && (
            <Link
              to="/write"
              className="text-gray-700 hover:text-blue-500 py-2 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineEdit className="mr-2" /> Write
            </Link>
          )}

          {user?.username ? (
            <>
              <span className="text-gray-700 py-2">Hello, {user.username}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="bg-red-500 text-white w-1/4 py-2 px-4 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 rounded-full hover:bg-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
