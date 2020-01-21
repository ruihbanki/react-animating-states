# React animating states

React components to create animation between two or more components.

## Examples

- [Basic](https://codesandbox.io/s/react-animating-states-givg7)

## Code example

```JSX
import React, { useState } from "react";
import { AnimatingStates, State } from "react-animating-states";

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
```

## AnimatingStates props

| Name           | Type             | Description                      |
| -------------- | ---------------- | -------------------------------- |
| animateOnMount | PropTypes.bool   | Animate when mount the component |
| children       | PropTypes.node   | Any react node                   |
| duration       | PropTypes.number | Animation duration               |
| state          | PropTypes.string | Active state                     |
| onAnimateStart | PropTypes.func   | Called when the animation starts |
| onAnimateEnd   | PropTypes.func   | Called when the animation ends   |

## States props

| Name     | Type             | Description    |
| -------- | ---------------- | -------------- |
| name     | PropTypes.string | State name     |
| children | PropTypes.node   | Any react node |
