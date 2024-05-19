import { useEffect, useState } from "react";
import ApodDisplay from "../src/components/ApodDisplay";
import ApodFooter from "../src/components/ApodFooter";
import ApodSideBar from "../src/components/ApodSideBar";
import { Link } from "react-router-dom";

function APOD() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  /*defining a state - regular variable -used to manage interactivity*/
  const [showModel, setShowModel] = useState(false);

  function handleToggleModal() {
    setShowModel(!showModel);
  }
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache today");
        return;
      }
      localStorage.clear();
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API today");
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <ApodDisplay data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModel && (
        <ApodSideBar data={data} handleToggleModal={handleToggleModal} />
      )}

      {data && <ApodFooter data={data} handleToggleModal={handleToggleModal} />}
    </>
    /*props - allows to communicate between components*/
  );
}

export default APOD;
