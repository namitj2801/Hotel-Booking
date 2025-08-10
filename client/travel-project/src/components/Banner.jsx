import React from "react";
// import { FaMapMarkerAlt, FaCalenderAlt } from "react-icons/fa";
import BannerImage from "../assets/Rectangle 2.png";
import SearchPage from "../pages/SearchPage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSearch } from "../context/Search";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearch();

  const handelSearch = async (e) => {
    e.preventDefault();
    if (!search.keyword) {
      console.error("Search keyword is missing");
      return;
    }
    try {
      navigate("/search");
      const url = `${import.meta.env.VITE_BASE_URL}/api/booking/search/${
        search.keyword
      }`;
      console.log("Requesting:", url);
      const { data } = await axios.get(url);
      setSearch({ ...search, results: data });
    } catch (error) {
      console.error("Error during search API call:", error);
    }
  };

  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      {/* Show content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white h-full px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to our website</h1>
        <p className="text-base sm:text-lg mt-2 text-center">
          Plan and book your perfect trip with expert advice, travel tips,
          destination information, and inspiration from us.
        </p>
        {/* Search Bar */}
        <div className="flex items-center justify-center mt-8 w-full max-w-[55rem] sm:w-[80%] md:w-[60%] bg-white p-3 rounded-lg shadow-lg space-x-4">
          <input
            type="text"
            className="flex-grow p-2 border-gray-300 rounded-md text-black focus:outline-none focus:ring-blue-500 bg-white"
            placeholder="Search destination"
            value={search.keyword}
            onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
          ></input>
          <button
            onClick={handelSearch}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
