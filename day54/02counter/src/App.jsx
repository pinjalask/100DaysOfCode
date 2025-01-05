import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { use } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  let [message, setMessage] = useState("");

  const addValue = function () {
    if (counter >= 20) {
      message = "You cannot INCREASE the number above 20";
      setMessage(message);
    } else {
      counter = counter + 1;
      setCounter(counter);
      setMessage("");
    }
  };

  const removeValue = function () {
    if (counter <= 0) {
      message = "You cannot DECREASE the number below 0";
      setMessage(message);
    } else {
      setCounter(counter - 1);
      setMessage("");
    }
  };

  return (
    <>
      <h1>Counter with React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>

      <p>{message}</p>
    </>
  );
}

export default App;
