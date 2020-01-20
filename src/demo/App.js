import React, { useState } from "react";
import { AnimatingStates, State } from "../lib";

export const App = () => {
  const [state, setState] = useState(null);
  return (
    <div>
      <h2>AnimateState</h2>
      <button onClick={() => setState("A")}>A</button>
      <button onClick={() => setState("B")}>B</button>
      <button onClick={() => setState("C")}>C</button>
      <button onClick={() => setState("Columns")}>Columns</button>
      <button onClick={() => setState("Panel")}>Panel</button>
      <button onClick={() => setState(null)}>Null</button>
      <AnimatingStates state={state} animateOnMount>
        <State name="A" style={{ border: "1px solid yellow" }}>
          A
        </State>
        <State name="B" style={{ border: "1px solid blue" }}>
          B <br />B <br />B <br />B <br />
        </State>
        <State name="C" style={{ border: "1px solid red" }}>
          C <br />C <br />C <br />C <br />C <br />C <br />C <br />C <br />
        </State>
        <State name="Columns">
          <div
            style={{
              display: "grid",
              height: 200,
              gridTemplateColumns: "repeat(3, 1fr)",
              gridColumnGap: 20
            }}
          >
            <div style={{ border: "1px solid #aaa" }}>1</div>
            <div style={{ border: "1px solid #aaa" }}>2</div>
            <div style={{ border: "1px solid #aaa" }}>3</div>
          </div>
        </State>
        <State name="Panel">
          <div
            style={{
              height: 300,
              border: "1px solid #aaa"
            }}
          >
            panel
          </div>
        </State>
      </AnimatingStates>
    </div>
  );
};

export default App;
