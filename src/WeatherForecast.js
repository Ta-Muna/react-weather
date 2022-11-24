import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
