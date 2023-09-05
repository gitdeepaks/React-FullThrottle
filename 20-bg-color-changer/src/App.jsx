import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  const changeColor = (color) => {
    setColor(color);
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => changeColor("red")}
            className="outline-none text-white px-4 py-1 rounded "
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("green")}
            className="outline-none text-white px-4 py-1 rounded "
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => changeColor("blue")}
            className="outline-none text-white px-4 py-1 rounded "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => changeColor("yellow")}
            className="outline-none px-4 py-1 rounded "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => changeColor("orange")}
            className="outline-none px-4 py-1 rounded "
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => changeColor("purple")}
            className="outline-none text-white px-4 py-1 rounded "
            style={{ backgroundColor: "purple" }}
          >
            Orange
          </button>
          <button
            onClick={() => changeColor("white")}
            className="outline text px-4 py-1 rounded "
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
