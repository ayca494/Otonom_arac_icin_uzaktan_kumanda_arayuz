import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const sol = "🡨";
  const sol2 = "<<";
  const sag = "🡪";
  const sag2 = ">>";
  const ust = "🡩";
  const alt = "🡫";

  const [counter, setCounter] = useState(0);

  const artırmafonksiyonu = () => {
    if ((counter) => 0 && counter < 100) {
      setCounter(counter + 1);
    }
    if (counter === 100) {
      setCounter(counter);
    }
  };
  const azaltmafonksiyonu = () => {
    if (counter > 0 && counter <= 100) {
      setCounter(counter - 1);
    }
  };

  const [direction, setDirection] = useState(0);

  const right = () => {
    if (direction => 0 && direction <= 20) {
      setCounter(direction + 1);
    }
    if(direction===20){
      setCounter(direction)
    }
  };

  const right2 = () => {
    if (direction => 0 && direction <= 20) {
      setCounter(direction + 2);
    }
  };

  const left = () => {
    if (direction > 0 && direction <= 20) {
      setCounter(direction - 1);
    }
  };

  const left2 = () => {
    if (direction > 0 && direction <= 20) {
      setCounter(direction - 2);
    }
  };

  return (
    <div className="App">
      {/* <h4 style={{color:"red"}}>ERCİYES OTONOM ARAÇ</h4> */}
      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={artırmafonksiyonu}
        >
          {ust}
        </button>
      </div>

      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={left2}
        >
          {sol2}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={left}
        >
          {sol}
        </button>
        <button type="button" class="btn btn-danger">
          ▧
        </button>

        <h4>{counter}</h4>

        <button type="button" class="btn btn-danger">
          ⊚
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={right}
        >
          {sag}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={right2}
        >
          {sag2}
        </button>
      </div>

      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={azaltmafonksiyonu}
        >
          {alt}
        </button>
      </div>
    </div>
  );
}

export default App;
