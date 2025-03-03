"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Page() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=kigali&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = () => {
    axios.get(url).then((response) => {
      setWeatherData(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-center font-bold p-4">Today&apos;s weather</h1>
      <button onClick={fetchWeather}>Fetch data</button>
    </div>
  );
}
