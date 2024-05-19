import React from "react";
import { Link } from "react-router-dom";

export default function ApodFooter(props) {
  const { showModal, handleToggleModal, data } = props;
  return (
    <footer>
      <div className="bgGradient"> </div>
      <div>
        <div className="">
          <h5>Astronomy Picture of the Day</h5>
        </div>
        <h2>{data?.title}</h2>
      </div>
      <div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
        <Link to="/">
          <button>
            <i className="fa-solid fa-house"></i>
          </button>
        </Link>
      </div>
    </footer>
  );
}
