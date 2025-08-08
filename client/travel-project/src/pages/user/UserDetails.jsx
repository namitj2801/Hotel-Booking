import React from "react";
import { useAuth } from "../../context/UserContext";

const UserDetails = () => {
  const [auth] = useAuth();
  //   console.log("Auth context:", auth);
  const user = {
    name: auth?.user?.name,
    email: auth?.user?.email,
  };
  return (
    <div className="p-8 ma-w-sm bg-white mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        User Details
      </h2>
      <div className="space-y-4 ">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800 w-24">Name:</span>
          <span className="text-gray-600">{user.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800 w-24">Email:</span>
          <span className="text-gray-600">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
