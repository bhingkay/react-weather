import React from "react";
import "./Weather.css";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div>
      <form claswsName="Weather">
        <input
          type="search"
          placeholder="Enter a city "
          autoFocus="off"
          className="inputcity"
        />
        <Button variant="outline-primary" className="btnprimary">
          Search
        </Button>{" "}
        <Button variant="outline-success" className="currentbtn">
          Curent
        </Button>{" "}
      </form>
      <h1>Jerusalem</h1>
      <ul>
        <li>Sunday 12:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />
            <div className="float-left">
              <strong> 19</strong>
              <span className="units">
                <a href="/"> °C </a> | <a href="/"> °F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: 60%</li>
            <li> Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
