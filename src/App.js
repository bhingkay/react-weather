import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="WeatherApp">
        <Weather />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
