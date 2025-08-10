import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegCalendarAlt, FaRegMoneyBillAlt, FaUserAlt } from "react-icons/fa";
import NavbarAdmin from "./NavbarAdmin.jsx";

const AllTrip = () => {
  const [bookingList, setAllBookingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllTrip = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/booking/get-all-bookings`
      );
      if (response.data && Array.isArray(response.data.bookings)) {
        setAllBookingList(response.data.bookings);
      } else {
        setAllBookingList([]);
      }
    } catch (err) {
      setError("Failed to fetch bookings. Please try again.");
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTrip();
  }, []);

  if (loading) {
    return (
      <div className="flex p-4">
        <NavbarAdmin />
        <div className="w-full ml-8 text-center mt-10">Loading bookings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex p-4">
        <NavbarAdmin />
        <div className="w-full ml-8 text-center mt-10 text-red-500">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="flex p-4">
      <NavbarAdmin />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full ml-8">
        {bookingList.length > 0 ? (
          bookingList.map((booking) => (
            <div
              key={booking._id}
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200"
            >
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {booking.post?.title || "No Title"}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  <FaRegCalendarAlt className="inline-block mr-2" />
                  {booking.bookingDate
                    ? new Date(booking.bookingDate).toLocaleDateString()
                    : "No Date"}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <FaRegMoneyBillAlt className="inline-block mr-2" />
                  Payment Status: {booking.paymentStatus || "N/A"}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <FaUserAlt className="inline-block mr-2" />
                  User: {booking.user?.name || "Unknown User"}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Status:{" "}
                  <span
                    className={`${
                      booking.status === "pending"
                        ? "text-yellow-500"
                        : "text-green-500"
                    } font-bold`}
                  >
                    {booking.status || "N/A"}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No bookings found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTrip;
