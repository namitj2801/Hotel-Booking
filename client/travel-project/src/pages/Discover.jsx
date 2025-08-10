import React from "react";
import AustraliaImg from "../assets/Discover/australia.jpg";
import NewImg from "../assets/Discover/newzealand.webp";
import GreeceImg from "../assets/Discover/greece.webp";

const Discover = () => {
  const destinations = [
    {
      name: "Australia",
      desc: "From the Great Barrier Reef to vibrant cities, Australia has something for everyone.",
      img: AustraliaImg,
    },
    {
      name: "New Zealand",
      desc: "A paradise for nature lovers, with mountains, lakes, and adventure sports.",
      img: NewImg,
    },
    {
      name: "Greece",
      desc: "Experience ancient history, crystal-clear waters, and Mediterranean cuisine.",
      img: GreeceImg,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Discover</h1>
      <p className="text-gray-600 mb-12">
        Discover top travel destinations, handpicked for unforgettable
        experiences.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={dest.img}
              alt={dest.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {dest.name}
              </h2>
              <p className="text-gray-600">{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-12"></div>
    </div>
  );
};

export default Discover;
