import React, { useState } from "react";
import { AnimatingStates, State } from "../lib";

export const Basic = () => {
  const [state, setState] = useState(null);
  return (
    <div>
      <h2>Basic</h2>
      <button onClick={() => setState("A")}>A</button>
      <button onClick={() => setState("B")}>B</button>
      <button onClick={() => setState("C")}>C</button>
      <button onClick={() => setState(null)}>Null</button>
      <AnimatingStates state={state}>
        <State name="A" style={{ border: "1px solid yellow" }}>
          A
        </State>
        <State name="B" style={{ border: "1px solid blue" }}>
          B <br />B <br />B <br />B <br />
        </State>
        <State name="C" style={{ border: "1px solid red" }}>
          C <br />C <br />C <br />C <br />C <br />C <br />C <br />C <br />
        </State>
      </AnimatingStates>
    </div>
  );
};

export default Basic;
