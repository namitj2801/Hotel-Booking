import React from "react";
import beachImg from "../assets/Activities/iloveimg-converted/1300x820.jpg";
import mountainImg from "../assets/Activities/iloveimg-converted/mountainhiking.jpg";
import cityImg from "../assets/Activities/iloveimg-converted/citytours.jpg";

const Activities = () => {
  const activities = [
    {
      title: "Beach Adventures",
      desc: "Relax under the sun or try water sports at the world's most stunning beaches.",
      img: beachImg,
    },
    {
      title: "Mountain Hiking",
      desc: "Experience breathtaking views and challenging trails in the most scenic mountains.",
      img: mountainImg,
    },
    {
      title: "City Tours",
      desc: "Explore iconic landmarks, hidden gems, and cultural highlights of top cities.",
      img: cityImg,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Activities</h1>
      <p className="text-gray-600 mb-12">
        From relaxing getaways to thrilling adventures, My Dream Place offers
        activities for every traveler’s style.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {activities.map((act) => (
          <div
            key={act.title}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={act.img}
              alt={act.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {act.title}
              </h2>
              <p className="text-gray-600">{act.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-12"></div>
    </div>
  );
};

export default Activities;
