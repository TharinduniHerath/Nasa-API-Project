import React from "react";

const RoverCard = ({ image }) => {
  return (
    <div className=" rounded     max-md overflow-hidden mb-3 shadow-lg border border-gray-500">
      <img src={image.img_src} alt="Rover" className="w-full" />
      <div className="px-6  py-4">
        <div className="font-bold text-xl mb-2">{image.rover.name}</div>
        <p className="text-gray-700 text-base">
          Earth Date: {image.earth_date}
        </p>
        <p className="text-gray-700 text-base">Camera: {image.camera.name}</p>
      </div>
    </div>
  );
};

export default RoverCard;
