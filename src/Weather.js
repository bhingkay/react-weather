import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div>
      <form claswsName="Weather">
        <input type="search" placeholder="Input a city. . " autoFocus="off" />
        <input type="submit" value="Search" className="searchbtn" />
      </form>
    </div>
  );
}
