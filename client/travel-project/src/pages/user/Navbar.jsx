import React from "react";
import { FaUser, FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavbarMenu = [
  { id: 1, name: "User details", link: "/user", icon: <FaUser /> },
  { id: 2, name: "Your Orders", link: "/user/your-order", icon: <FaList /> },
];

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white w-[15rem] h-full min-h-[28rem] border-r border-gray-700">
      <nav className="flex flex-col p-5 space-x-4">
        {NavbarMenu.map((item) => {
          return (
            <NavLink
              to={item.link}
              key={item.id}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`
              }
              end={item.link === "/user"}
            >
              <span className="mr-3 text-xl ">{item.icon}</span>
              <span className="text-md ">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
