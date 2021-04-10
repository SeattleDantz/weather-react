import React from "react";

import "./TodaysDetails.css";

export default function TodaysDetails() {
  let weatherData = {
    city: "Seattle",
    date: "April 3",
    temp: 55,
    description: "Clear",
    hiLo: "50°F / 40°F",
    humidity: 45,
    windSpeed: 19,
    image: "images/sunny.png",
  };
  return (
    <div className="TodaysDetails">
      <div className="row">
        <div className="col-4">
          <ul className="detail-list">
            <li className="city">{weatherData.city}</li>
            <li className="date">{weatherData.date}</li>
            <li className="temp">Currently {weatherData.temp}°F</li>
            <li className="weather">{weatherData.description}</li>
            <li className="hi-lo">{weatherData.hiLo}</li>
          </ul>
        </div>
        <div className="col-4 humidity-wind">
          <ul className="detail-list-cont">
            <li className="humidity">Humidity: {weatherData.humidity}%</li>
            <li className="wind">Wind speed: {weatherData.windSpeed}m/hr</li>
          </ul>
        </div>

        <div className="col-4">
          <img
            className="current-icon"
            src={weatherData.image}
            alt={weatherData.description}
          />
        </div>
      </div>
    </div>
  );
}
