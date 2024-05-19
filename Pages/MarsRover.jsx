import React, { useState } from "react";
import RoverCard from "../src/components/RoverCard";
import SearchForm from "../src/components/SearchForm";
import Header from "../src/components/Header";

const MarsRover = () => {
  const [images, setImages] = useState([]);

  const handleSearch = (photos) => {
    setImages(photos);
  };

  return (
    <>
      <Header />
      <div
        className=" container   justify-center pt-[12rem] -mt-[5rem]"
        customPaddings
        id="login"
      >
        <div className="container  flex  justify-center  ">
          <div className="  p-0.5 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600">
            <div className=" bg-n-8 rounded-[1rem]">
              <div className=" items-center justify-center mb-3">
                <div className="w-96  rounded px-7 py-10 ">
                  <h4 className="  text-2xl font-bold text-center  mb-3  ">
                    Mars Rover Images
                  </h4>
                  <SearchForm onSearch={handleSearch} />
                  <div class="w-96 h-96 flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-4 ">
                      {images.map((image) => (
                        <RoverCard key={image.id} image={image} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarsRover;
