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
    </div>
  );
}
