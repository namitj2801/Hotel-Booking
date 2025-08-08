import React from "react";
import AdminDetails from "./AdminDetails";
import NavbarAdmin from "./NavbarAdmin";

const AdminDashboard = () => {
  return (
    <div className="flex justify-center items-start p-10 bg-gray-50 min-h-screen">
      <div className="flex shadow-lg rounded-lg overflow-hidden bg-white min-h-[28rem] w-[82rem] ">
        <NavbarAdmin />
        <AdminDetails />
      </div>
    </div>
  );
};

export default AdminDashboard;
