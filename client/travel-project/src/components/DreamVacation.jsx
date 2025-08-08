import React from "react";
import Image1 from "../assets/Post/Rectangle 8.png";
import Image2 from "../assets/Post/Rectangle 9.png";
import Image3 from "../assets/Post/Rectangle 10.png";
import Image4 from "../assets/Post/Rectangle 11.png";

const DreamVacation = () => {
  const destination = [
    { image: Image1, name: "Australia", properties: 2246 },
    { image: Image2, name: "Japan", properties: 1278 },
    { image: Image3, name: "New Zealand", properties: 480 },
    { image: Image4, name: "Greece", properties: 320 },
  ];
  return (
    <div className="flex flex-col mt-14">
      <h1 className="text-3xl font-semibold mb-2 ml-[10rem] ">
        Enjoy your dream vacation
      </h1>
      <p className="text-gray-600 mb-10 max-w-xl ml-[10rem] ">
        Plan and book your perfect trip with export adivve, travel trips,
        destination information and inspiration from us
      </p>
      <div className="flex gap-4 justify-center ">
        {destination.map((item, index) => (
          <div className="text-center" key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="w-[18rem] h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2 ">{item.name}</h2>
            <p className="text-gray-600 text-sm">
              {item.properties} properties
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamVacation;
