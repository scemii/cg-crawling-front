import { useState } from "react";
import GcOne from "./components/GcOne";
import nvidia from "./Images/Nvidia_(logo).svg";
import amd from "./Images/AMD_Logo_2.svg"

import "./App.css";

function App() {
  const [value, setValue] = useState("3080");
  const [property, setProperty] = useState("nvidia");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value.includes("68")) {
      setProperty("amd");
    } else {
      setProperty("nvidia");
    }
  };

  return (
    <div className="App">
      <div className="flex-container">
        <select
          name="gc"
          id="gc-selector"
          className="gc-selector"
          onChange={handleChange}
        >
          <option defaultValue="3080">3080</option>
          <option value="3090">3090</option>
          <option value="6800">6800</option>
          <option value="6800xt">6800xt</option>
        </select>
        <div className="image-container">
          {property === "nvidia" ? (
            <img className="main-image" alt="gc-logo" src={nvidia} />
          ) : (
            <img className="main-image" alt="gc-logo" src={amd} />
          )}
        </div>
      </div>
      <GcOne value={value} />
    </div>
  );
}

export default App;
