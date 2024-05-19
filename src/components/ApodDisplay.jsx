import React from "react";
export default function ApodDisplay(props) {
  const { data } = props;
  return (
    <div className="imgContainer ">
      <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" />
    </div>
  );
}
