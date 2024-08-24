import { useState } from "react";
import "../styles/Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(counter, "counter");

  function Increment() {
    setCounter(counter + 1);
  }
  function Decrement() {
    setCounter(counter - 1);
  }
  function Reset() {
    setCounter(0);
  }

  return (
    <div className="counterDiv">
      <div className="counterContent">
        <button id="decrement" onClick={Decrement}>
          -
        </button>
        <h1 id="counter">Counter : {counter}</h1>
        <button id="increment" onClick={Increment}>
          +
        </button>
      </div>
      <button id="reset" onClick={Reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
