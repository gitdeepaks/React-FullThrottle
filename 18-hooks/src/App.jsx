import "./App.css";

function App() {
  let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
  };
  return (
    <>
      <h1>Chai or Hooks</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  );
}

export default App;
