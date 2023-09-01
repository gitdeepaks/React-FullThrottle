import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className=" justify-center items-center flex text-3xl text-blue-500 rounded-xl bg-green-400 p-4 mb-4">
        Hello
      </h1>
      <Card username="chai or code" btnText="ClickMe" />
      <Card username="Deepak" />
    </>
  );
}

export default App;
