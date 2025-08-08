import React from "react";
import { FaUser, FaPlus, FaList, FaFolder, FaMap } from "react-icons/fa";
import { Link, Links } from "react-router-dom";

const NavbarAdmin = () => {
  const navbarMenu = [
    { id: 1, name: "Admin Details", link: "/admin/details", icon: <FaUser /> },
    {
      id: 2,
      name: "Create Post",
      link: "/admin/create-post",
      icon: <FaPlus />,
    },
    { id: 3, name: "Admin Details", link: "/admin/all-post", icon: <FaList /> },
    {
      id: 4,
      name: "Admin Details",
      link: "/admin/create-category",
      icon: <FaFolder />,
    },
    {
      id: 5,
      name: "Admin Details",
      link: "/admin/all-booking",
      icon: <FaMap />,
    },
  ];

  return (
    <div className="bg-gray-800 text-white w-[15rem] h-full min-h-[28rem] border-r border-gray-700">
      <nav className="flex flex-col p-5 space-x-4">
        {navbarMenu.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="flex items-center space-x-2 text-sm hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300"
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavbarAdmin;
