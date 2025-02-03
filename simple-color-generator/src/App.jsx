import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState("100");

  const handleInputColor = (event) => {
    setColor(event.target.value);
  };

  const handleOpacity = (event) => {
    setOpacity(event.target.value);
  };

  return (
    <div className="app">
      <h1 style={{ margin: 0 }}>Color Generator</h1>
      <input type="color" onChange={handleInputColor} />
      <input
        type="range"
        min="0"
        max="100"
        value={opacity}
        onChange={handleOpacity}
      />

      <div style={{border: "black solid 3px", borderRadius: "6%"}}>
        <div
          className="color-output"
          style={{ backgroundColor: color, opacity: opacity + "%", borderRadius: "4%" }}
        ></div>
      </div>

      <div>
        <h2 style={{ textAlign: "center" }}>- - - Output - - -</h2>
        <p>Hex : {color}</p>
        <p>RGB : rgb(123,123,123)</p>
        <p>Opacity : {opacity}%</p>
      </div>
    </div>
  );
}

export default App;
