import React from "react";
import "./Weather.css";
import { Button } from "react-bootstrap";
import ReactAnimatedWeather from "react-animated-weather";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  let Weather = {
    city: "Manila",
    day: "Sunday ",
    time: "12:00",
    description: "Sunny",
    temperature: 25,
  };
  return (
    <div>
      <form claswsName="Weather">
        <input
          type="search"
          placeholder="Enter a city "
          autoFocus="off"
          className="inputcity"
        />
        <Button variant="primary" className="btnprimary">
          Search
        </Button>{" "}
        <Button variant="success" className="currentbtn">
          Curent
        </Button>{" "}
      </form>

      <h1>{Weather.city}</h1>
      <ul>
        <li>
          {Weather.day} {Weather.time}
        </li>
        <li>{Weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />

            <div className="float-left">
              <strong> {Weather.temperature}</strong>
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
      <div className="forecast">
        <div className="row">
          <div className="col-2">
            <h6>Monday</h6>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </div>
          <div className="col-2">
            <h6>Tuesday</h6>
            <div className="tuesimage">
              <ReactAnimatedWeather
                icon="RAIN"
                color="white"
                size={60}
                animate={true}
              />{" "}
            </div>
          </div>
          <div className="col-2">
            <h6>Wednesday</h6>
            <ReactAnimatedWeather
              icon="SNOW"
              color="white"
              size={60}
              animate={true}
            />
          </div>
          <div className="col-2">
            <h6>Thursday</h6>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </div>
          <div className="col-2">
            <h6>Friday</h6>
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="white"
              size={60}
              animate={true}
            />
          </div>
          <div className="col-2">
            <h6>Saturday</h6>
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="white"
              size={60}
              animate={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
