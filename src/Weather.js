import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type the city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <img src={weatherData.iconUrl} alt={weatherData.description} />
        <h2 className="text-capitalize">{weatherData.description}</h2>
        <h3 className="temperature">
          <span className="currentTempearture">
            {Math.round(weatherData.temperature)}{" "}
          </span>
          <span className="unit-selection">
            <a href="#" className="units" id="celsius">
              °C
            </a>
            " 🌡 "
            <a href="#" className="units" id="fahrenheit">
              °F
            </a>
          </span>
        </h3>
        <h4>
          <div>
            {" "}
            <FormattedDate date={weatherData.date} />
          </div>
        </h4>
        <br />
      </div>
    );
  } else {
    const apiKey = `434de5eada78e8cca4747491478592c5`;

    let unit = "metric";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
