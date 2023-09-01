import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    // console.log("clicked", setCounter);

    if (counter === 20) {
      return setCounter(20);
    }
  };

  const removeValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1;
    setCounter(counter - 1);

    if (counter === 0) {
      return setCounter(0);
    }
  };
  return (
    <>
      <h1>Chai or Hooks</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer{counter}</p>
    </>
  );
}

export default App;
