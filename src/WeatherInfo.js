import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherTemperature from "./CurrentWeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <WeatherIcon code={props.data.icon} size={150} />

      <h2 className="text-capitalize">{props.data.description}</h2>
      <h3 className="temperature">
        <CurrentWeatherTemperature celsius={props.data.temperature} />
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
