import React from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo (2).png";
import { useState } from "react";

const Navbar = () => {
  const isSignIn = true;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  //   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Brand logo*/}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="ml-7rem"></img>
      </div>
      {/* Navbar links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="/" className="text-gray-600 hover:text-gray-900">
          Discover
        </a>
        <a href="/" className="text-gray-600 hover:text-gray-900">
          Activities
        </a>
        <a href="/" className="text-gray-600 hover:text-gray-900">
          Contact us
        </a>
        <a href="/" className="text-gray-600 hover:text-gray-900">
          About
        </a>
      </div>
      {/* Notification and profile */}
      <div className="flex items-center space-x-4 mr-[9rem] relative">
        <FaUser size={20} onClick={handleDropDownToggle} />

        {isDropDownOpen && (
          <div
            className="absolute right-0 mt-36 w-48 bg-white-border border-gray-200 rounded shadow-lg z-50"
            onMouseLeave={closeDropDown}
          >
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Your Profile
                </a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Your Order
                </a>
              </li>
              {isSignIn ? (
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/" className="text-gray-600 hover:text-gray-900">
                    Sign Out
                  </a>
                </li>
              ) : (
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <a href="/" className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
