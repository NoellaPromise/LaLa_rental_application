import React from "react";

function Weather({ data }) {
  return (
    <>
      <div className="text-center flex justify-center gap-5 font-bold text-2xl">
        <p>{data.weather[0].main}</p>
        <p>{data.main.temp.toFixed(0)}&#176;</p>
      </div>
    </>
  );
}

export default Weather;
