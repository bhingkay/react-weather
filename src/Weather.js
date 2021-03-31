import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiId = "a1436310c1d8f47f9c04f28cd4c73311";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiId}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div>
      <h2>Hello Bhingkay</h2>
      <Loader type="Ovalf" color="red" height={100} width={100} />;
    </div>
  );
}
