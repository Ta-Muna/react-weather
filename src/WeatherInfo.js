import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <WeatherIcon code={props.data.icon} />

      <h2 className="text-capitalize">{props.data.description}</h2>
      <h3 className="temperature">
        <span className="currentTempearture">
          {Math.round(props.data.temperature)}{" "}
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
          <FormattedDate date={props.data.date} />
        </div>
      </h4>
      <br />
    </div>
  );
}
