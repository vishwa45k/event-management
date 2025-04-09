import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the mobile menu

  // Toggle menu function for mobile view
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white font-worksans text-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-sky-600 animate-pulse">
              COLLEGE FEST
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/technical"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Technical
                </Link>
                <Link
                  to="/sports"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Event
                </Link>
                <Link
                  to="/stage"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Stage
                </Link>
                <Link
                  to="/deleteevent"
                  className="text-red-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Delete Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu (sm screens) */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/technical"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Add Technical
          </Link>
          <Link
            to="/sports"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Add Event
          </Link>
          <Link
            to="/stage"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Add Stage
          </Link>
          <Link
            to="/deleteevent"
            className="text-red-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Delete Event
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
