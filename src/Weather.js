import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Tbilisi</h1>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
        alt="cloudy"
      />
      <h2>Sunny</h2>
      <h3 className="currentTemperature">20°C</h3>
    </div>
  );
}
