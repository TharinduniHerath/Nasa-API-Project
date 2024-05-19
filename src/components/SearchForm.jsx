import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

const SearchForm = ({ onSearch }) => {
  // const [date, setDate] = useState("");
  const [roverName, setRoverName] = useState("");
  const [cameraName, setCameraName] = useState("");

  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

  // const url =
  // "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos`,
        {
          params: {
            sol: 1000,
            camera: cameraName,
            api_key: import.meta.env.VITE_NASA_API_KEY,
          },
        }
      );
      const filteredPhotos = response.data.photos.filter(
        (photo) => photo.camera.name === cameraName
      );

      onSearch(filteredPhotos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1 className="mb-1 text-center text text-color-5">
        Step into the shoes of a Martian explorer!
      </h1>
      <h2 className="mb-3 text-center text-color-1">
        Discover breathtaking images taken by NASA's Mars rovers on any day.
      </h2>
      <div className="mb-8 flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <select
              id="roverName"
              value={roverName}
              onChange={(e) => setRoverName(e.target.value)}
              className="px-4 py-2 border border-color-5 mb-7"
            >
              <option value="">Select Rover Name</option>
              <option value="curiosity">curiosity</option>
              <option value="opportunity">opportunity</option>
              <option value="spirit">spirit</option>
            </select>
          </div>
          <div className="flex flex-col">
            <select
              id="cameraName"
              value={cameraName}
              onChange={(e) => setCameraName(e.target.value)}
              className="px-4 py-2 border border-color-5 mb-7"
            >
              <option value="">Select Camera Name</option>
              <option value="FHAZ">FHAZ</option>
              <option value="RHAZ">RHAZ</option>
              <option value="MAST">PANCAM</option>
              <option value="MAST">NAVCAM</option>
              NAVCAM
            </select>
          </div>
          <Button
            type="submit"
            className="p-2 ml-2 border-color-6 border rounded "
          >
            Search
          </Button>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
