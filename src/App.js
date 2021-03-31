import "./App.css";
import Weather from "./Weather";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="WeatherApp">
        <Weather />
        <h1>Jerusalem</h1>
        <ul>
          <li>Sunday 12:00</li>
          <li>Sunny</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
