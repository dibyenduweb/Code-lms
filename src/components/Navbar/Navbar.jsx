/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-100 fixed w-full z-20 top-0 shadow-md ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-green-600 font-bold text-xl">Codepee</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* Search bar with icon */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search courses" 
                className="border rounded px-4 py-1 focus:outline-none pl-10" 
              />
              <FiSearch className="absolute right-2 top-2 text-gray-500" size={20} />
            </div>
            <a href="/" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="/course" className="text-gray-800 hover:text-green-600">Courses</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Blogs</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Notice</a>
            <a href="/account" className="bg-green-600 text-white px-4 py-2 rounded-md">Sign in</a>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-600">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-100 w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <input
              type="text"
              placeholder="Search courses"
              className="border rounded w-full px-2 py-1 focus:outline-none"
            />
            <a href="/" className="block text-gray-800 hover:bg-green-100 px-3 py-2 rounded-md">
              Home
            </a>
            <a href="#" className="block text-gray-800 hover:bg-green-100 px-3 py-2 rounded-md">
              Courses
            </a>
            <a href="#" className="block text-gray-800 hover:bg-green-100 px-3 py-2 rounded-md">
              Pages
            </a>
            <a href="#" className="block text-gray-800 hover:bg-green-100 px-3 py-2 rounded-md">
              About
            </a>
            <a href="#" className="block bg-green-600 text-white px-4 py-2 rounded-md text-center">
              Sign in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;


