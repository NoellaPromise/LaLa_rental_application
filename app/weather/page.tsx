"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Weather from "../components/Weather";

export default function Page() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = () => {
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-center font-bold p-4 text-blue-950 text-lg">Today&apos;s weather</h1>
      {/* <Image
        src="https://images.unsplash.com/photo-1675640145657-7ac2289cb4bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Weather"
        width={1497}
        height={1497}
        layout="responsive"
      /> */}
      <div className="flex justify-center gap-4 m-5">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value) 
            
        }
        className="p-3 border border-dashed rounded-lg text-black"/>
      <button onClick={fetchWeather} className="text-center bg-blue-950 text-white p-4 rounded-lg">Show weather</button>
      </div>
      {weather.main &&<Weather data={weather}/>}
      
    </div>
  );
}
