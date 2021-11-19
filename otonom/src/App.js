import React from "react";
// import db from "./firebase"
// import firebase from "firebase"
import "./App.css";
import { useState } from "react";

function App() {
  const sol = "🡨";
  const sol2 = "<<";
  const sag = "🡪";
  const sag2 = ">>";
  const ust = "🡩";
  const alt = "🡫";

  let [counter, setCounter] = useState(0);
  const [direc, setDirec] = useState(0);

  return (
    

    <div className="App">
      {/* <h4 style={{color:"red"}}>ERCİYES OTONOM ARAÇ</h4> */}
      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setCounter(counter + 1)}
        >
          {ust}
        </button>
      </div>

      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setDirec(direc - 2)}
        >
          {sol2}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setDirec(direc - 1)}
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
          onClick={() => setDirec(direc + 1)}
        >
          {sag}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setDirec(direc + 2)}
        >
          {sag2}
        </button>
      </div>

      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setCounter(counter - 1)}
        >
          {alt}
        </button>
      </div>
    </div>
  );
}

export default App;
