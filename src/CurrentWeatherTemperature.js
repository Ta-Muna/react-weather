import React, { useState } from "react";

export default function CurrentWeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentWeatherTemperature">
        <span className="currentTempearture">
          {Math.round(props.celsius)} °
        </span>
        <span className="unit-selection">
          C🌡
          <a href="/" onClick={showFahrenheit} className="units">
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeatherTemperature">
        <span className="currentTempearture">{Math.round(fahrenheit())} °</span>
        <span className="unit-selection">
          <a href="/" onClick={showCelsius} className="units">
            C
          </a>
          🌡F
        </span>
      </div>
    );
  }
}
