import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
  }
  const [temperature, setTemperature] = useState("");
  let apiKey = "551f8c89cdce818fb4f3b6e3fe374a5c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <Loader
        type="Puff"
        color="yellow"
        height={50}
        width={50}
        timeout={10000} //3 secs
      />
      <h2>
        The weather in {props.city} is {temperature}℉.
      </h2>
    </div>
  );
}
