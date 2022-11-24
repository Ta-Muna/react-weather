import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  const apiKey = `434de5eada78e8cca4747491478592c5`;
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}$units=metric
`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thursday</div>
          <WeatherIcon code="01d" size={50} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">20°</span>
            <span className="WeatherForecast-temperature-min">17°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
