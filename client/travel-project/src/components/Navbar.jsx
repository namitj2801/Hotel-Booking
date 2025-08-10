import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo (2).png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { toast } from "react-toastify";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
    closeDropDown();
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    if (auth.user.role === "admin") {
      navigate("/admin/details");
    } else {
      navigate("/user");
    }
  };
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Brand logo*/}
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="ml-[7rem]"></img>
      </Link>
      {/* Navbar links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link to="/discover" className="text-gray-600 hover:text-gray-900">
          Discover
        </Link>
        <Link to="/activities" className="text-gray-600 hover:text-gray-900">
          Activities
        </Link>
        <Link to="/contact" className="text-gray-600 hover:text-gray-900">
          Contact us
        </Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
      </div>
      {/* Notification and profile */}
      <div className="flex items-center space-x-4 mr-[9rem] relative cursor-pointer">
        <IoIosHeartEmpty
          size={20}
          className="cursor-pointer"
          onClick={() => navigate("/cart")}
        />
        <FaUser size={20} onClick={handleDropDownToggle} />

        {isDropDownOpen && (
          <div className="absolute right-0 mt-36 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
            <ul>
              {auth?.token ? (
                <>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      to="/user"
                      // onClick={closeDropDown}
                      onClick={(e) => {
                        e.preventDefault(); // stop auto navigation
                        handleRedirect();
                        closeDropDown();
                      }}
                      className="block"
                    >
                      Your Profile
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <button onClick={handleLogout} className="w-full text-left">
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/login" onClick={closeDropDown} className="block">
                      Sign In
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      to="/register"
                      onClick={closeDropDown}
                      className="block"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
